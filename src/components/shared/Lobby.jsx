import styled from "styled-components";
import { CURRENT_WEEK, useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../hooks/useSizeRatio";
import { Block } from "./Block";
import { Button } from "./Button";
import { FlexWrapper } from "./FlexWrapper"
import { LockWeek } from "./icons/LockWeek";
import { LobbyHeader } from "./LobbyHeader"

const currentShadow = 'inset -4px -4px 6px 0 rgba(0, 0, 0, 0.25), inset 4px 4px 6px 0 rgba(255, 255, 255, 0.25)';
const passedShadow = 'inset -4px -4px 6px 0 rgba(0, 0, 0, 0.25), inset 4px 4px 6px 0 rgba(0, 0, 0, 0.25)';
const Levels = styled.div`
    margin-top: ${({$ratio}) => $ratio * 152}px;
    width: ${({$ratio}) => $ratio * 343}px;

    & button {
        width: 100%;
    }
`;

const ButtonStyled = styled(Button)`
    color: var(--color-white);
    margin-bottom: var(--spacing_small);
    ${({$unavailabe}) => $unavailabe ? 'background: #001418; opacity: 0.8; cursor: auto;' : ''};
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
    box-shadow: ${({$unavailabe, $passed}) => $unavailabe ? 'none' : $passed ? passedShadow : currentShadow};

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

export const Lobby = ({ activeWeek, passedLevels, levelScreens}) => {
    const ratio = useSizeRatio();
    const {next} = useProgress();
    const currentLevel = passedLevels.length + 1 > 3 ? 3 : passedLevels.length + 1;

    const handleClickLevel = (level) => {
        if (currentLevel !== level) return;

        next(levelScreens[level]);
    }

    const levels = Array.from({length: 3}, (v, i) => i + 1);
    const weeks = Array.from({length: 4}, (v, i) => i + 1);

    return (
        <FlexWrapper>
            <LobbyHeader />
            <Levels $ratio={ratio}>
                {
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
                            $ratio={ratio}
                            $passed={w < activeWeek}
                            $unavailabe={w > activeWeek && w <= CURRENT_WEEK}
                            $locked={w > CURRENT_WEEK}
                        >
                            {w > CURRENT_WEEK ? (
                                <LockWeek />
                            ) : <p>{w}</p>}
                        </WeekButton>
                    ))}
                </WeeksBlock>
            </BlockStyled>
        </FlexWrapper>
    )
}