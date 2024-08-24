import styled from "styled-components";
import { SCREENS } from "../../../constants/screens";
import { useProgress } from "../../../contexts/ProgressContext";
import { Block } from "../Block";
import { Button } from "../Button";
import { Modal } from "./Modal";

const Content = styled(Block)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Text = styled.p`
    font-size: var(--font_md);
`;

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: var(--spacing_x4);
    justify-content: space-between;

    & button {
        width: calc((100% - var(--spacing_x2)) / 2);
    }
`;

const WEEK_TO_LOBBY = {
    1: SCREENS.LOBBY1,
    2: SCREENS.LOBBY2,
    3: SCREENS.LOBBY3,
    4: SCREENS.LOBBY4,
}

export const ExitModal = () => {
    const { next, modal } = useProgress();

    const { week, setModal } = modal;

    const handleQuit = () => {
        setModal({visible: false});

        next(WEEK_TO_LOBBY[week]);
    }

    const handleCancel = () => {
        setModal({visible: false});
    }

    return (
        <Modal isDarken>
            <Content isWhite>
                <Text>Если ты сейчас выйдешь в меню, то потеряешь прогресс на текущем уровне. Точно хочешь выйти?</Text>
                <ButtonWrapper>
                    <Button color="red" onClick={handleQuit}>В меню</Button>
                    <Button onClick={handleCancel}>Остаться</Button>
                </ButtonWrapper>
            </Content>
        </Modal>
    )
}