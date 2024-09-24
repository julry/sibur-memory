import { useState } from "react";
import styled from "styled-components"
import { SCREENS } from "../../../constants/screens"
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../hooks/useSizeRatio";
import { Button } from "../../shared/Button"
import { Lobby } from "../../shared/Lobby"
import { UnavailableModal } from "../../shared/modals";

const ButtonStyled = styled(Button)`
    background: linear-gradient(244.28deg, #957D4D 42.06%, #F1E9CF 81.79%, #957D4D 102.1%);
    box-shadow: inset -4px -4px 6px rgba(0, 0, 0, 0.25), inset 4px 4px 6px rgba(255, 255, 255, 0.25);
    color: white;
`;

const ModalStyled = styled(UnavailableModal)`
   & button {
    width: ${({$ratio}) => $ratio * 15}px;
   }
`;

export const Lobby4 = () => {
    const ratio = useSizeRatio();
    const [unavailableModal, setUnavailableModal] = useState({visible: false, text: ''});
    const {next, passedWeekLevels} = useProgress();

    const handleNext = () => {
        if (passedWeekLevels[4].includes(1) || passedWeekLevels[4].includes('1')) {
            const text = <p>
                Этот <b>уровень уже пройден</b>.
            </p>
            setUnavailableModal({visible: true, text})
        }
        else next(SCREENS.GAME4);
    }

    return (
        <Lobby 
            activeWeek={4} 
            hasOwnButton
            levelScreens={{
                cards: SCREENS.LIBRARY4
            }} 
        >
            <ButtonStyled onClick={handleNext}>Финальный уровень</ButtonStyled>
            {unavailableModal.visible && (
                <ModalStyled $ratio={ratio} text={unavailableModal.text} onClose={() => setUnavailableModal({visible: false})} />
            )}
        </Lobby>
    )
}