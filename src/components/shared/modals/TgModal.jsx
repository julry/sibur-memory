import styled from "styled-components";
import { useProgress } from "../../../contexts/ProgressContext";
import { Block } from "../Block";
import { Modal } from "./Modal";
import { Button } from "../Button";
import { BackButton } from "../BackButton";

const Content = styled(Block)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-left: var(--spacing_x5);
    padding-right: var(--spacing_x5);
    text-align: center;
`;

const ButtonStyled = styled(Button)`
    margin: var(--spacing_x4) 0 0;
`;

const BackButtonStyled = styled(BackButton)`
    position: absolute;
    top: var(--spacing_x4);
    left: var(--spacing_x4);
`;

export const TgModal = () => {
    const { user, setVipPoints, modal, setUserInfo, setModal } = useProgress();

    const handleClick = () => {
        if (!user.isTgConnected) {
            if (user.isVip) setVipPoints(prev => prev + 1);
            setUserInfo({isTgConnected: true});
        }

        setModal({visible: false});
    }

    return (
        <Modal isDarken isDisabledAnimation={modal.isDisabledAnimation}>
            <BackButtonStyled onClick={() => setModal({visible: false})}/>
            <Content>
                <p>
                    В нашем <b>tg-боте</b> ты можешь следить за <b>обновлениями</b> игры 
                    и находить ответы на возможные вопросы. Там же мы огласим ID <b>победителей</b> розыгрыша!{'\n\n'}
                    {user?.isVip ? (
                        <>
                            Кстати, в боте можно подписаться на полезный канал про карьерные возможности и получить <b>дополнительный листик</b>.
                        </>
                    ) : (
                        <>
                            Кстати, в боте можно подписаться на <b>полезный</b> канал про карьерные возможности и быть в курсе классных стажировок!
                        </>
                    )}
                </p>
                <ButtonStyled onClick={handleClick}>Перейти</ButtonStyled>
            </Content>
        </Modal>
    )
}