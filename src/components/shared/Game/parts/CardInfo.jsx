import { useState } from "react";
import styled from "styled-components"
import { useProgress } from "../../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../../hooks/useSizeRatio";
import { Block } from "../../Block";
import { Button } from "../../Button";
import { Modal } from "../../modals/Modal"

const Wrapper = styled(Modal)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    & p {
        font-size: var(--font_md);
    }
`;

const BlockStyled = styled(Block)`
    padding-left: var(--spacing_x5);
    padding-right: var(--spacing_x5);
`;

const Image = styled.img`
    object-fit: contain;
    width: ${({$ratio}) => $ratio * 292}px;
    height: ${({$ratio}) => $ratio * 292}px;
    border-radius: ${({$ratio}) => $ratio * 8}px;
    margin-bottom: var(--spacing_x4);
`;

const ButtonStyled = styled(Button)`
    margin-top: var(--spacing_x4);
    width: ${({$ratio}) => $ratio * 343}px;
`;

const AnswerBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--spacing_x4);
    width: 100%;
    flex-wrap: wrap;
`;

const AnswerButtonStyled = styled(Button)`
    width: ${({$isFullWidth}) => $isFullWidth ? '100%' : 'calc((100% - var(--spacing_x2))/2)'};
    ${({$isFullWidth}) => $isFullWidth ? 'font-size: var(--font_sm)' : ''};

    & + & {
        ${({$isFullWidth}) => $isFullWidth ? 'margin-top: calc(var(--spacing_x1) * 1.5)' : ''};
    }
`;

const Result = styled.p`
    color: var(--color-${({$color}) => $color});
`;

export const CardInfo = ({isLast, card, onClose, finishLevel, onPickIncorrect, points = 3}) => {
    const ratio = useSizeRatio();
    const [taskResult, setTaskResult] = useState({});
    const { next, setGamePoints, gamePoints } = useProgress();
    const { isTask, infoText, buttons } = card;

    const isAnswered = isTask && taskResult.text;
    const isShownNext = !isTask || isAnswered;

    const handleNext = () => {
        if (isLast) {
            finishLevel?.(gamePoints + points);
            setGamePoints(prev => prev + points);
            next();
        } else {
            // if (!taskResult.isCorrect) onPickIncorrect?.();
            onClose?.();
        }
    }

    const handleClickButton = (id) => {
        const button = buttons[id];

        if (!button) return;

        setTaskResult({text: button?.answerText, isCorrect: button?.isCorrect});

        if (button.isCorrect) setGamePoints(prev => prev + 5);
    }

    return (
        <Wrapper isDarken>
            <BlockStyled isWhite>
                <Image $ratio={ratio} src={card.image} alt="" />
                <p>{infoText}</p>
                {isTask && (
                    <AnswerBlock>
                        {
                            taskResult.text ? (
                                <Result $color={taskResult.isCorrect ? 'green2' : 'red'}>{taskResult.text}</Result>
                            ) : (
                                <>
                                    <AnswerButtonStyled 
                                        color="green2" 
                                        $isFullWidth={buttons[0].isFullWidth} 
                                        onClick={() => handleClickButton(0)}
                                    >
                                        {buttons[0].text}
                                    </AnswerButtonStyled>
                                    <AnswerButtonStyled 
                                        color="green3" 
                                        $isFullWidth={buttons[1].isFullWidth} 
                                        onClick={() => handleClickButton(1)}
                                    >
                                        {buttons[1].text}
                                    </AnswerButtonStyled>
                                </>
                            )
                        }
                    </AnswerBlock>
                )}
            </BlockStyled>
            {isShownNext && <ButtonStyled $ratio={ratio} onClick={handleNext}>Далее</ButtonStyled>}
        </Wrapper>
    )
}