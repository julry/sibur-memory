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
    font-size: var(--font-size_md);
`;

const BlockStyled = styled(Block)`
    padding-left: var(--spacing_x5);
    padding-right: var(--spacing_x5);
    max-height: calc(100% -  4 * var(--spacing_x5));
    overflow-y: auto;
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

    & button {
        width: calc((100% - var(--spacing_x2))/2);
    }
`;

const Result = styled.p`
    color: var(--color-${({$color}) => $color});
`;

export const CardInfo = ({isLast, card, onClose, finishLevel, points = 3}) => {
    const ratio = useSizeRatio();
    const [taskResult, setTaskResult] = useState({});
    const { next, setGamePoints } = useProgress();
    const { isTask, infoText, buttons } = card;

    const isAnswered = isTask && taskResult.text;
    const isShownNext = !isTask || isAnswered;

    const handleNext = () => {
        if (isLast) {
            finishLevel?.();
            setGamePoints(prev => prev + points);
            next();
        } else onClose?.();
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
                                    <Button color="green2" onClick={() => handleClickButton(0)}>{buttons[0].text}</Button>
                                    <Button color="green3" onClick={() => handleClickButton(1)}>{buttons[1].text}</Button>
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