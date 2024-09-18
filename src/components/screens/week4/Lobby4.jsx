import { SCREENS } from "../../../constants/screens"
import { Lobby } from "../../shared/Lobby"

export const Lobby4 = () => {
    return (
        <Lobby 
            activeWeek={3} 
            levelScreens={{
                1: SCREENS.GAME3_1,
                2: SCREENS.GAME3_2,
                3: SCREENS.GAME3_3,
                cards: SCREENS.LIBRARY3
            }} 
        />
    )
}