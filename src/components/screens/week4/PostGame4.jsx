import styled from "styled-components";
import { SCREENS } from "../../../constants/screens";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../hooks/useSizeRatio";
import { reachMetrikaGoal } from "../../../utils/reachMetrikaGoal";
import { BackButton } from "../../shared/BackButton";
import { Block } from "../../shared/Block";
import { Button } from "../../shared/Button";
import { FlexWrapper } from "../../shared/FlexWrapper";

const Wrapper = styled(FlexWrapper)`
    justify-content: center;
`;

const BlockStyled = styled(Block)`
    text-align: center;
`;

const ButtonStyled = styled(Button)`
    margin-top: var(--spacing_x4);
    width: ${({$ratio}) => $ratio * 343}px;
    
    & + & {
        margin-top: var(--spacing_small);
    }
`;

const BackButtonStyled = styled(BackButton)`
    position: absolute;
    top: var(--spacing_x4);
    left: var(--spacing_x4);
`;

export const PostGame4 = () => {
    const ratio = useSizeRatio();
    const { weekPoints, next, user, setUserInfo, } = useProgress();

    const setGameInfo = () => {
        setUserInfo({isFromGame: true, lastWeek: 4});
    }

    const handleGoLobby = () => {
        setGameInfo();
        next(SCREENS.LOBBY4)
    };

    const handleLinkClick = () => {
        reachMetrikaGoal(user.isVip ? `site_visit4` : `nontarget_site4`);
        window.open('https://career.sibur.ru', '_blank');
    };
    return (
        <Wrapper>
            <BackButtonStyled onClick={handleGoLobby}/>
            <BlockStyled>
                <p>Все 4 недели завершены!</p>
                <br/>
                <p>
                    Накопленные баллы за неделю — {weekPoints}. 
                </p>
                <br/>
                {
                    user.isVip ? (
                        <p>
                            Следи за результатами розыгрыша iPhone 15 Pro Max и других призов этой недели.
                        </p>
                    ) : (
                        <p>
                            Следи за результатами розыгрыша призов в tg-боте и у себя на почте.
                        </p>
                )}
                <br />
                <p>
                    Не прощаемся и ждём тебя{'\n'}
                    на стажировках в СИБУРе!{'\n'}
                    Узнать о них подробнее{'\n'} 
                    ты можешь на сайте!
                </p>
            </BlockStyled>
        
            <ButtonStyled $ratio={ratio} onClick={handleLinkClick}>
                Узнать
            </ButtonStyled>
        </Wrapper>
    )
}