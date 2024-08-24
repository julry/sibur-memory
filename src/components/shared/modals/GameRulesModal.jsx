import styled from "styled-components";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../hooks/useSizeRatio";
import { Block } from "../Block";
import { Modal } from "./Modal";
import { Button } from "../Button";
import { FlexWrapper } from "../FlexWrapper";

const Content = styled(FlexWrapper)`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const ButtonStyled = styled(Button)`
    margin-top: var(--spacing_x4);
    width: ${({$ratio}) => $ratio * 343}px;
`;

export const GameRulesModal = () => {
    const ratio = useSizeRatio();
    const { setModal, modal } = useProgress();

    return (
        <Modal isDarken>
            <Content>
                <Block isWhite hasCloseIcon={!modal.isFirstTime} onClose={() => setModal({visible: false})}>
                    <p>
                        <b>Находи пары</b> одинаковых картинок, <b>переворачивая</b> по две карточки.{'\n'}
                        Если картинки не совпадут, 
                        то перевернутся обратно. {'\n\n'}
                        За <b>золотыми карточками</b> скрыты <b>вопросы</b> — если правильно ответишь, то получишь дополнительные баллы.{'\n'}
                        {modal.isFirstTime ? '\n' : '\n\n'}
                        При выходе из игры прогресс текущего уровня не сохранится.
                        {modal.isFirstTime ? '\n\n Чтобы не потерять результат внутри уровня, нужно найти пары для всех карточек.' : ''}
                    </p>
                </Block>
                <ButtonStyled $ratio={ratio} onClick={() => setModal({visible: false})}>Понятно</ButtonStyled>
            </Content>
        </Modal>
    )
}