import styled from "styled-components";
import { useSizeRatio } from "../../../hooks/useSizeRatio";
import { Block } from "../Block";
import { Button } from "../Button";
import { Modal } from "./Modal";

const ModalStyled = styled(Modal)`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        text-align: center;
        font-size: var(--font_md);
    }
`;

const ButtonStyled = styled(Button)`
    margin-top: var(--spacing_x5);
    width: ${({$ratio}) => $ratio * 343}px;
`;

export const LeafsRulesModal = (props) => {
    const ratio = useSizeRatio();

    return (
        <ModalStyled isDarken>
            <Block isWhite>
                <p>
                    Заходи в игру каждую неделю{' '}
                    и получай <b>листики</b> для участия{' '}
                    в розыгрыше iPhone 15 Pro Max.{'\n\n'}
                    Также ты можешь получить дополнительный листик, если пригласишь 3 и более игроков со своего факультета.{' '}
                    Им нужно будет при регистрации ввести твой ID.{'\n\n'}
                    Чем больше листиков наберешь, тем больше шанс выиграть{' '}
                    <b>главный приз</b>! Победителя мы выберем случайным образом{' '}
                    после окончания четырёх недель игры.
                </p>
            </Block>
            <ButtonStyled $ratio={ratio} onClick={props.onClose}>Понятно</ButtonStyled>
        </ModalStyled>
    )
}