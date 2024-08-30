import styled from "styled-components";
import { Block } from "../Block";
import { Modal } from "./Modal";

const ModalStyled = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UnavailableModal = ({ text, onClose }) => (
    <ModalStyled onClick={onClose} isDarken>
        <Block hasCloseIcon onClose={onClose} isWhite>
            {text}
        </Block>
    </ModalStyled>
);