import styled from "styled-components";
// import close from '../../assets/images/close.svg';
import { useSizeRatio } from "../../hooks/useSizeRatio";

const Wrapper = styled.div`
    position: relative;
    border-radius: var(--border-radius-lg);
    padding: var(--spacing_x5) var(--spacing_x3);
    background-color: rgba(0, 49, 60, 0.9);
    color: var(--color-white);
    width: ${({$ratio}) => $ratio * 343}px;
    font-size: var(--font_lg);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// const CloseIcon = styled.button`
//     position: absolute;
//     top: var(--spacing_x2);
//     right: var(--spacing_x2);
//     background: transparent;
//     outline: none;
//     border: none;
//     width: ${({$ratio}) => $ratio * 16}px;
//     height: ${({$ratio}) => $ratio * 16}px;
//     background: url(${close}) no-repeat center center;
//     background-size: cover;
//     cursor: pointer;
// `;

export const Block = ({hasCloseIcon, onClose, children, ...props}) => {
    const ratio = useSizeRatio();

    return (
        <Wrapper {...props} $hasCloseIcon={hasCloseIcon} $ratio={ratio}>
            {children}
            {/* {hasCloseIcon && <CloseIcon $ratio={ratio} onClick={onClose}/>} */}
        </Wrapper>
    )
}