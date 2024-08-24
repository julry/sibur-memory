import styled from "styled-components";
import { useSizeRatio } from "../../hooks/useSizeRatio";

const Wrapper = styled.input`
    padding: var(--spacing_small) var(--spacing_x4);
    font-size: var(--font_lg);
    outline: none;
    border: none;
    border-radius: var(--border-radius-sm);
    background: var(--color-white);
    width: 100%;
    color: #2E2E2E;

    &::placeholder {
        color: #818181;
    }
`;

export const Input = (props) => {
    const ratio = useSizeRatio();

    return <Wrapper {...props} $ratio={ratio} />
}