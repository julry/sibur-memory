import { useState } from "react";
import styled from "styled-components";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../hooks/useSizeRatio";
import { reachMetrikaGoal } from "../../../utils/reachMetrikaGoal";
import { FlexWrapper } from "../FlexWrapper";
import { GameHeader } from "../GameHeader";
import { GameRulesModal } from "../modals";
import { ExitModal } from "../modals/ExitModal";
import { Board } from "./parts/Board";
import { CardInfo } from "./parts/CardInfo";
import useMemoryGame from "./useGame";

const Wrapper = styled(FlexWrapper)`
    justify-content: center;
`;

const Title = styled.p`
    position: absolute;
    width: 100%;
    text-align: center;
    top: ${({$ratio}) => $ratio * 102}px;
    font-size: ${({$ratio}) => $ratio * 22}px;
    font-weight: bold;
    left: 0;
`;

export const Game = ({level, week, showRules, initialCards, points = 3, isLastLevel, isWrongShuffle}) => {
    const ratio = useSizeRatio();
    const {user, setLevelPoints} = useProgress();
    const [isExitModal, setIsExitModal] = useState(false);
    const [isRulesModal, setIsRulesModal] = useState(showRules);
    const [isFirstTime, setIsFirstTime] = useState(showRules);
    const [isShuffling, setIsShuffling] = useState(false);

    const handleCloseRules = () => {
        if (isFirstTime) setIsFirstTime(false);

        setIsRulesModal(false);
    };

    const {
        cardSelectedOne,
        cardSelectedTwo,
        handleSelection,
        deck,
        cardInfo, 
        isLast,
        setCardInfo,
        matches,
        shuffleDeck
    } = useMemoryGame(initialCards);

    const handleFinishLevel = (curPoints) => {
        setLevelPoints(level, week, isLastLevel, curPoints);
        reachMetrikaGoal(`${user.isVip ? '' : 'non'}target_week${week}_quest${level}`);
    };

    const handlePickIncorrect = () => {
        if (!isWrongShuffle) return;
        setIsShuffling(true);
        shuffleDeck();
        setTimeout(() => setIsShuffling(false), 300);
    }
    
    return (
        <Wrapper>
            <GameHeader onBack={()=>setIsExitModal(true)} onClickRules={()=>setIsRulesModal(true)} matches={matches} cardAmount={deck?.length / 2}/>
            <Title $ratio={ratio}>Уровень {level}</Title>
            <Board
                flippedCards={[cardSelectedOne, cardSelectedTwo]}
                onCardClick={handleSelection}
                cards={deck}
                isShuffling={isShuffling}
            />
            {cardInfo && (
                <CardInfo 
                    card={cardInfo} 
                    isLast={isLast} 
                    onClose={() => setCardInfo()} 
                    finishLevel={handleFinishLevel} 
                    points={points}
                    onPickIncorrect={handlePickIncorrect}
                />
            )}
            {isRulesModal && <GameRulesModal isFirstTime={isFirstTime} onClose={handleCloseRules} />}
            {isExitModal && <ExitModal week={week} onClose={() => setIsExitModal(false)} />}
        </Wrapper>
    )
}