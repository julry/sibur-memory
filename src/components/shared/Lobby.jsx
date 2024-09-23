import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { WEEK_TO_LOBBY, WEEK_TO_SCREEN } from "../../constants/weekToScreens";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../hooks/useSizeRatio";
import { Block } from "./Block";
import { Button } from "./Button";
import { FlexWrapper } from "./FlexWrapper"
import { LockWeek } from "./icons/LockWeek";
import { LobbyHeader } from "./LobbyHeader"
import { FirstRulesModal, MissedWeekModal, RefreshCoinsModal, UnavailableModal, WaitModal } from "./modals";
import { NewWeek } from "./modals/NewWeek";

const currentShadow = 'inset -4px -4px 6px 0 rgba(0, 0, 0, 0.25), inset 4px 4px 6px 0 rgba(255, 255, 255, 0.25)';
const passedShadow = 'inset -4px -4px 6px 0 rgba(0, 0, 0, 0.25), inset 4px 4px 6px 0 rgba(0, 0, 0, 0.25)';

const Levels = styled(FlexWrapper)`
    margin-top: ${({$ratio}) => $ratio * 152}px;
    width: ${({$ratio}) => $ratio * 343}px;
    flex-grow: 1;

    & button {
        width: 100%;
    }

    & button:last-child {
        margin-top: auto;
        margin-bottom: var(--spacing_x4);
    }
`;

const ButtonStyled = styled(Button)`
    color: var(--color-white);
    margin-bottom: var(--spacing_small);
    ${({$unavailabe}) => $unavailabe ? 'background: #001418; opacity: 0.8;' : ''};
    box-shadow: ${({$unavailabe, $passed}) => $unavailabe ? 'none' : $passed ? passedShadow : currentShadow};
`;

const BlockStyled = styled(Block)`
    margin-top: auto;
    margin-bottom: var(--spacing_x4);
`;

const WeeksBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: var(--spacing_small);
`;

const WeekButton = styled(Button)`
    width: ${({$ratio}) => $ratio * 66}px;
    height: ${({$ratio}) => $ratio * 50}px;
    ${({$unavailabe}) => $unavailabe ? 'background: #001418; opacity: 0.6' : ''};
    ${({$locked}) => $locked ? 'padding: 0; background: transparent' : ''};
    box-shadow: ${({$unavailabe, $current}) => $unavailabe ? 'none' : $current ? currentShadow : passedShadow};

    & + & {
        margin-left: var(--spacing_small);
    }

    & p {
        font-size: ${({$ratio}) => $ratio * 26}px;
        color: var(--color-green3);
    }

    & svg {
        width: 100%;
        height: 100%;
    }
`;

export const Lobby = ({ activeWeek, levelScreens, isShowRules, hasOwnButton, children}) => {
    const ratio = useSizeRatio();
    const {next, passedWeeks, passedWeekLevels, user, setUserInfo, setModal, modal, currentWeek, setWeekPoints, updateUser} = useProgress();
    const [isModal, setIsModal] = useState(isShowRules && !user.seenRules);
    const [newWeekModal, setNewWeekModal] = useState(user.isVip && user.registerWeek !== currentWeek && !user.weekLeafs.includes(currentWeek))
    const [isNextWeekModal, setIsNextWeekModal] = useState(!user.seenNext && activeWeek === currentWeek && passedWeeks.includes(activeWeek) && currentWeek !== 4);
    const [isPrevWeekModal, setIsPrevWeekModal] = useState(user.isVip && user.isFromGame && !!user.lastWeek && passedWeeks.includes(user.lastWeek) && user.lastWeek !== currentWeek);
    const passedLevels = passedWeekLevels[activeWeek];
    const currentLevel = passedLevels.length + 1 > 3 ? 3 : passedLevels.length + 1;
    const lastWeek = passedWeeks.length + 1 > 4 ? 4 : passedWeeks.length + 1;
    const [isMissedModal, setIsMissedModal] = useState(false);
    const [unavailableModal, setUnavailableModal] = useState({visible: false, text: ''});

    const handleClickLevel = (level) => {
        let text;

        if (level > currentLevel) {
            text = <p>
                Этот <b>уровень ещё недоступен</b>.{'\n'}Пройди предыдущий.
            </p>
        }

        if (passedLevels.includes(level)) {
            text = <p>
                Этот <b>уровень уже пройден</b>.
            </p>
        }

        if (currentLevel !== level || passedLevels.includes(level)) {
            setUnavailableModal({visible: true, text})
            return;
        }

        next(levelScreens[level]);
    }

    const handleClickWeek = (w) => {
        let text;

        if (w > lastWeek) {
            text = <p>
                Эта <b>неделя ещё недоступна</b>.{'\n'}Пройди предыдущую.
            </p>
        }
        if (w > currentWeek) {
            text = <p>
                Эта <b>неделя ещё закрыта</b>,{'\n'}загляни в понедельник!
            </p>
        }

        if (w > lastWeek || w > currentWeek) {
            setUnavailableModal({visible: true, text})
            return;
        }

        if (w === activeWeek) return;

        if (passedWeekLevels[w]?.length === 0 && !user[`seenStart${w}`]) {
            setUserInfo({[`seenStart${w}`]: true});
            
            next(WEEK_TO_SCREEN[w]);

            return;
        }

        next(WEEK_TO_LOBBY[w]);
    };

    const handleCloseModal = () => {
        setIsModal(false);
        setUserInfo({seenRules: true});
        if ((passedWeeks.length + 1 < currentWeek) && user.isVip) setIsMissedModal(true);
    }

    const handleClosePrevWeekModal = () => {
        if (user.lastWeek !== currentWeek || !user.isVip) setWeekPoints(0);
        setUserInfo({isFromGame: false, lastWeek: null});
        setIsPrevWeekModal(false);
    }

    const handleCloseWeekModal = () => {
        setUserInfo({seenWeekInfo: true});
        setIsMissedModal(false);
    }

    const handleCloseNextWeekModal = () => {
        setUserInfo({isFromGame: false, seenNext: true});
        setIsNextWeekModal(false);
    }


    const handleShowMissed = () => {
        if (user.isVip && passedWeeks[passedWeeks.length - 1] < currentWeek && !user.seenWeekInfo)  setIsMissedModal(true);
    }

    const showTgModal = () => {
        setModal({visible: true, type: 'tg', closeFunc: handleShowMissed});
        setUserInfo({seenTg: true});
        updateUser({seenTg: true});
    }

    useEffect(() => {
        if (
            passedWeeks[passedWeekLevels.length - 1] < currentWeek 
            && currentWeek > 1 
            && !user.seenPrevInfo 
            && passedLevels.length < 1
        ) {
            setIsPrevWeekModal(true);
            setUserInfo({seenPrevInfo: true});
        }

        if (!user.isTgConnected && !newWeekModal && activeWeek === 3 && !user.seenTg && !isPrevWeekModal) {
            showTgModal()
        }
       
        if (user.isVip && !isPrevWeekModal && !isModal && !user.seenWeekInfo && passedWeeks.length + 1 < currentWeek && !newWeekModal && modal.type !== 'tg') {
            setIsMissedModal(true);
        }
    }, [user.registerWeek, newWeekModal, isPrevWeekModal, isModal, newWeekModal, modal.type]);

    const levels = Array.from({length: 3}, (v, i) => i + 1);
    const weeks = Array.from({length: 4}, (v, i) => i + 1);

    return (
        <FlexWrapper>
            <LobbyHeader/>
            <Levels $ratio={ratio}>
                {children}
                {!hasOwnButton &&
                    levels.map((level) => (
                        <ButtonStyled
                            key={level}
                            color={level === 2 ? "green2" : level === 3 ? "green3" : undefined}
                            onClick={() => handleClickLevel(level)}
                            $unavailabe={currentLevel < level}
                            $passed={passedLevels.includes(level)}
                        >
                            Уровень {level}
                        </ButtonStyled>
                    ))
                }
                <Button color="white" onClick={() => next(levelScreens.cards)}>Собранные карточки недели</Button>
            </Levels>
            <BlockStyled>
                <p>Недели</p>
                <WeeksBlock>
                    {weeks.map((w) => (
                        <WeekButton 
                            key={`week${w}`}
                            $ratio={ratio}
                            $current={w === activeWeek && w <= currentWeek}
                            $unavailabe={w > lastWeek && w <= currentWeek}
                            $locked={w > currentWeek}
                            onClick={() => handleClickWeek(w)}
                        >
                            {w > currentWeek ? (
                                <LockWeek />
                            ) : <p>{w}</p>}
                        </WeekButton>
                    ))}
                </WeeksBlock>
            </BlockStyled>
            {isModal && <FirstRulesModal onClose={handleCloseModal} />}
            {isMissedModal && <MissedWeekModal onClose={handleCloseWeekModal}/>}
            {isPrevWeekModal && <RefreshCoinsModal onClose={handleClosePrevWeekModal}/>}
            {isNextWeekModal && <WaitModal onClose={handleCloseNextWeekModal}/>}
            {newWeekModal && <NewWeek onClose={() => setNewWeekModal(false)}/>}
            {unavailableModal.visible && (
                <UnavailableModal text={unavailableModal.text} onClose={() => setUnavailableModal({visible: false})} />
            )}
        </FlexWrapper>
    )
}