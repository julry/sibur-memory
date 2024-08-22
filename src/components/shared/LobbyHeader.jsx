import styled from "styled-components";
import { useSizeRatio } from "../../hooks/useSizeRatio";
import { IconButton, BackButton } from "./Button";
import { PointsButton } from "./PointsButton";
import { useProgress } from "../../contexts/ProgressContext";
import { SCREENS } from "../../constants/screens";

const Wrapper = styled.div`
    position: absolute;
    top: var(--spacing_x4);
    left: var(--spacing_x4);
    right: var(--spacing_x4);
    padding: var(--spacing_small) var(--spacing_x3);
    display: flex;
    justify-content: space-between;
    z-index: 4;
    background-color: rgba(0, 49, 60, 0.6);
    border-radius: var(--border-radius-xl);
`;

const IconButtonStyled = styled(IconButton)`
    position: relative;
    flex-shrink: 0;
    margin-left: calc(var(--spacing_x1) * 1.5);   
`;

const Block = styled.div`
    display: flex;
`;

const BackButtonStyled = styled(BackButton)`
    opacity: ${({$isHidden}) => $isHidden ? 0 : 1};
`;
 
const VipPoints = styled.div`
    margin-left: calc(var(--spacing_x1) * 1.5);
`;

export const LobbyHeader = ({ onClickModalButton }) => {
    const { user, currentScreen, next, $whiteStarRef, $redStarRef } = useProgress();

    return (
        <Wrapper>
            <Block>
                <div ref={$whiteStarRef}>
                    <PointsButton type="coin" onClick={() => onClickModalButton({type: 'whiteStar'})} color="white"/>
                </div>
                {user.isVip && (
                    <VipPoints ref={$redStarRef}>
                        <PointsButton type="leaf" onClick={() => onClickModalButton({type: 'leaf'})} color="red"/>
                    </VipPoints>
                )}
            </Block>
            <Block>
                <IconButtonStyled icon={{width: 17, height: 21}} onClick={() => onClickModalButton({type: 'profile'})}>
                    <svg viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.45 11.9C15.1263 11.9 15.7749 12.1687 16.2531 12.6469C16.7313 13.1251 17 13.7737 17 14.45V15.0577C17 18.0982 13.4215 20.4 8.5 20.4C3.5785 20.4 0 18.218 0 15.0577V14.45C0 13.7737 0.26866 13.1251 0.746878 12.6469C1.2251 12.1687 1.8737 11.9 2.55 11.9H14.45ZM14.45 13.175H2.55C2.23318 13.175 1.92771 13.2929 1.69311 13.5059C1.45851 13.7188 1.31158 14.0114 1.28095 14.3267L1.275 14.45V15.0577C1.275 17.3306 4.15565 19.125 8.5 19.125C12.6871 19.125 15.6018 17.3357 15.7216 15.1946L15.725 15.0577V14.45C15.725 14.1332 15.6071 13.8277 15.3941 13.5931C15.1812 13.3585 14.8886 13.2116 14.5733 13.1809L14.45 13.175ZM8.5 0C9.16974 -9.97992e-09 9.83292 0.131915 10.4517 0.388214C11.0704 0.644513 11.6327 1.02018 12.1062 1.49376C12.5798 1.96733 12.9555 2.52955 13.2118 3.14831C13.4681 3.76707 13.6 4.43026 13.6 5.1C13.6 5.76974 13.4681 6.43292 13.2118 7.05168C12.9555 7.67044 12.5798 8.23267 12.1062 8.70624C11.6327 9.17982 11.0704 9.55548 10.4517 9.81178C9.83292 10.0681 9.16974 10.2 8.5 10.2C7.1474 10.2 5.85019 9.66268 4.89376 8.70624C3.93732 7.74981 3.4 6.4526 3.4 5.1C3.4 3.7474 3.93732 2.45019 4.89376 1.49376C5.85019 0.53732 7.1474 2.01554e-08 8.5 0ZM8.5 1.275C7.48555 1.275 6.51264 1.67799 5.79532 2.39532C5.07799 3.11264 4.675 4.08555 4.675 5.1C4.675 6.11445 5.07799 7.08736 5.79532 7.80468C6.51264 8.52201 7.48555 8.925 8.5 8.925C9.51445 8.925 10.4874 8.52201 11.2047 7.80468C11.922 7.08736 12.325 6.11445 12.325 5.1C12.325 4.08555 11.922 3.11264 11.2047 2.39532C10.4874 1.67799 9.51445 1.275 8.5 1.275Z" fill="white"/>
                    </svg>
                </IconButtonStyled>
                <IconButtonStyled icon={{width: 9, height: 16}} onClick={() => onClickModalButton({type: 'prizes'})}>
                    <svg viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.65184 11H3.00651C3.00651 10.362 3.04881 9.80645 3.13341 9.33333C3.22451 8.85305 3.37419 8.42294 3.58243 8.04301C3.79067 7.65591 4.0705 7.28674 4.42191 6.93548C4.72777 6.64158 4.99458 6.36559 5.22234 6.10753C5.45011 5.84229 5.62581 5.56989 5.74946 5.29032C5.8731 5.01075 5.93492 4.70609 5.93492 4.37634C5.93492 3.98208 5.87961 3.6595 5.76898 3.4086C5.66486 3.15054 5.50868 2.95699 5.30043 2.82796C5.0987 2.69176 4.8449 2.62366 4.53905 2.62366C4.28525 2.62366 4.04772 2.68817 3.82646 2.8172C3.60521 2.93907 3.42625 3.13262 3.28959 3.39785C3.15293 3.66308 3.07809 4.01075 3.06508 4.44086H0C0.0195228 3.41577 0.23102 2.57706 0.63449 1.92473C1.03796 1.26523 1.57809 0.781362 2.25488 0.473118C2.93818 0.157706 3.69957 0 4.53905 0C5.46963 0 6.26681 0.16129 6.93059 0.483871C7.60087 0.806452 8.11171 1.28315 8.46312 1.91398C8.82104 2.5448 9 3.31541 9 4.22581C9 4.84946 8.89262 5.39785 8.67787 5.87097C8.46312 6.33692 8.17679 6.77419 7.81887 7.1828C7.46095 7.58423 7.06399 8.00358 6.62798 8.44086C6.25705 8.80645 6.00325 9.18638 5.86659 9.58065C5.72994 9.96774 5.65835 10.4409 5.65184 11ZM2.6551 14.2903C2.6551 13.81 2.81128 13.405 3.12364 13.0753C3.44252 12.7455 3.85575 12.5806 4.36334 12.5806C4.87093 12.5806 5.28091 12.7455 5.59328 13.0753C5.90564 13.405 6.06182 13.81 6.06182 14.2903C6.06182 14.7778 5.90564 15.1864 5.59328 15.5161C5.28091 15.8387 4.87093 16 4.36334 16C3.85575 16 3.44252 15.8387 3.12364 15.5161C2.81128 15.1864 2.6551 14.7778 2.6551 14.2903Z" fill="white"/>
                    </svg>
                </IconButtonStyled>
            </Block>
        </Wrapper>  
    )
}