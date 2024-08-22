import styled from "styled-components";
import { useSizeRatio } from "../../hooks/useSizeRatio";

const Wrapper = styled.button`
    border: none;
    outline: none;
    background: ${({$color}) => 'var(--color-' + $color + ')'};
    color: ${({$color}) => 'var(--color-' + $color + '-text)'};
    font-size: var(--font_md); 
    width: ${({$ratio}) => $ratio * 156}px;
    padding: ${({$ratio}) => $ratio * 11}px 0;
    border-radius: var(--border-radius-sm);
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }
`;

const IconWrapper = styled(Wrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({$ratio}) => $ratio * 36}px;
    height: ${({$ratio}) => $ratio * 36}px;
    padding: 0;
    border-radius: 50%;

    & svg:first-of-type {
        width: ${({$ratio, $svgWidth}) => $ratio * $svgWidth}px;
        height: ${({$ratio, $svgHeight}) => $ratio * $svgHeight}px;
    }
`;

export const Button = ({color = 'green', ...props}) => {
    const ratio = useSizeRatio();

    return <Wrapper {...props} $color={color} $ratio={ratio} />
}

export const IconButton = ({icon = {}, color = 'green2', ...props}) => {
    const ratio = useSizeRatio();
    const {width = 24, height = 24} = icon;

    return <IconWrapper {...props} $svgWidth={width} $svgHeight={height} $color={color} $ratio={ratio} />
}

export const BackButton = styled(IconButton)`
    width: auto;
    padding: 0 var(--spacing_x2);
`;