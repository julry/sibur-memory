import styled from "styled-components"
import { SCREENS } from "../../../constants/screens"
import { useProgress } from "../../../contexts/ProgressContext";
import { Button } from "../../shared/Button"
import { Lobby } from "../../shared/Lobby"

const ButtonStyled = styled(Button)`
    background: linear-gradient(244.28deg, #957D4D 42.06%, #F1E9CF 81.79%, #957D4D 102.1%);
    box-shadow: inset -4px -4px 6px rgba(0, 0, 0, 0.25), inset 4px 4px 6px rgba(255, 255, 255, 0.25);
    color: white;
`;

export const Lobby4 = () => {
    const {next} = useProgress();
    return (
        <Lobby 
            activeWeek={4} 
            hasOwnButton
            levelScreens={{
                cards: SCREENS.LIBRARY4
            }} 
        >
            <ButtonStyled onClick={() => {next(SCREENS.GAME4)}}>Финальный уровень</ButtonStyled>
        </Lobby>
    )
}