import styled from "styled-components";
import { useSizeRatio } from "../../hooks/useSizeRatio";

const Wrapper = styled.div`
    position: relative;
    border-radius: var(--border-radius-lg);
    padding: ${({$hasCloseIcon}) => $hasCloseIcon ? 'calc(2 * var(--spacing_x5) + var(--spacing_x1))' : 'var(--spacing_x5)'} var(--spacing_x3) ${({$hasCloseIcon}) => $hasCloseIcon ? 'calc(2 * var(--spacing_x5) - var(--spacing_x1))' : 'var(--spacing_x5)'};
    background-color: ${({$isWhite}) => $isWhite ? 'var(--color-white)' : 'rgba(0, 49, 60, 0.9)'};
    color: var(--color-white${({$isWhite}) => $isWhite ? '-text' : ''});
    width: ${({$ratio}) => $ratio * 343}px;
    font-size: var(--font_lg);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CloseIcon = styled.button`
    position: absolute;
    top: var(--spacing_x5);
    right: var(--spacing_x5);
    background: transparent;
    outline: none;
    border: none;
    width: ${({$ratio}) => $ratio * 15}px;
    height: ${({$ratio}) => $ratio * 14}px;
    cursor: pointer;
`;

export const Block = ({hasCloseIcon, onClose, children, isWhite, ...props}) => {
    const ratio = useSizeRatio();

    return (
        <Wrapper {...props} $isWhite={isWhite} $hasCloseIcon={hasCloseIcon} $ratio={ratio}>
            {children}
            {hasCloseIcon && (
                <CloseIcon $ratio={ratio} onClick={onClose}>
                    <svg width="100%" height="100%" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.78252 0.281426C2.58375 0.0962059 2.32084 -0.00462963 2.04919 0.000163364C1.77753 0.00495636 1.51835 0.115004 1.32623 0.307121C1.13411 0.499239 1.02407 0.758426 1.01927 1.03008C1.01448 1.30173 1.11532 1.56464 1.30054 1.76341L6.50148 6.96435L1.30054 12.1653C1.19751 12.2613 1.11488 12.3771 1.05757 12.5057C1.00026 12.6343 0.969444 12.7732 0.96696 12.9139C0.964476 13.0547 0.990375 13.1946 1.04311 13.3252C1.09585 13.4557 1.17435 13.5743 1.27392 13.6739C1.37349 13.7735 1.4921 13.852 1.62266 13.9047C1.75323 13.9574 1.89308 13.9833 2.03387 13.9809C2.17466 13.9784 2.31351 13.9476 2.44214 13.8902C2.57076 13.8329 2.68653 13.7503 2.78252 13.6473L7.98346 8.44634L13.1844 13.6473C13.2804 13.7503 13.3962 13.8329 13.5248 13.8902C13.6534 13.9476 13.7923 13.9784 13.9331 13.9809C14.0739 13.9833 14.2137 13.9574 14.3443 13.9047C14.4748 13.852 14.5934 13.7735 14.693 13.6739C14.7926 13.5743 14.8711 13.4557 14.9238 13.3252C14.9766 13.1946 15.0025 13.0547 15 12.9139C14.9975 12.7732 14.9667 12.6343 14.9094 12.5057C14.852 12.3771 14.7694 12.2613 14.6664 12.1653L9.46545 6.96435L14.6664 1.76341C14.8516 1.56464 14.9524 1.30173 14.9477 1.03008C14.9429 0.758426 14.8328 0.499239 14.6407 0.307121C14.4486 0.115004 14.1894 0.00495636 13.9177 0.000163364C13.6461 -0.00462963 13.3832 0.0962059 13.1844 0.281426L7.98346 5.48237L2.78252 0.281426Z" fill="#77E2C3"/>
                    </svg>
                </CloseIcon>
            )}
        </Wrapper>
    )
}