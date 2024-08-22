import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import { useSizeRatio } from '../../hooks/useSizeRatio';

const Wrapper = styled.div`
    position: relative;
    z-index: 1;
    width: ${({$ratio}) => $ratio * 135}px;
    height: ${({$ratio}) => $ratio * 26}px;
    margin-bottom: ${({$ratio}) => $ratio * 44}px;
    background: url(${logo}) no-repeat 0 0 / cover;
    flex-shrink: 0;
`;

export const Logo = (props) => {
    const ratio = useSizeRatio();

    return <Wrapper {...props} $ratio={ratio} />
}