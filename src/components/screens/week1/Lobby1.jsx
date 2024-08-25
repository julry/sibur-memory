import { SCREENS } from "../../../constants/screens"
import { Lobby } from "../../shared/Lobby"

export const Lobby1 = () => {
    return (
        <Lobby 
            activeWeek={1} 
            levelScreens={{
                1: SCREENS.GAME1_1,
                2: SCREENS.GAME1_2,
                3: SCREENS.GAME1_3,
                cards: SCREENS.LIBRARY1
            }} 
            isShowRules={true}
        />
    )
}