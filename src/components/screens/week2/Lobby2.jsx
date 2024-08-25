import { SCREENS } from "../../../constants/screens"
import { Lobby } from "../../shared/Lobby"

export const Lobby2 = () => {
    return (
        <Lobby 
            activeWeek={2} 
            levelScreens={{
                1: SCREENS.GAME2_1,
                2: SCREENS.GAME2_2,
                3: SCREENS.GAME2_3,
                cards: SCREENS.LIBRARY2
            }} 
        />
    )
}