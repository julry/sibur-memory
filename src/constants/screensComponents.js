// import { Game1 } from "../components/screens/Game1";
import { Intro } from "../components/screens/Intro";
import { Lobby1 } from "../components/screens/Lobby1";
import { Login } from "../components/screens/Login";
import { Registration1 } from "../components/screens/Registration1";
import { Registration2 } from "../components/screens/Registration2";
import { Start } from "../components/screens/Start";
import { Week1 } from "../components/screens/Week1";
// import { Lobby } from "../components/screens/Lobby";
// import { PostGame1 } from "../components/screens/PostGame1";
// import { Library } from "../components/screens/Library";
// import { Game2 } from "../components/screens/Game2";
// import { PostGame2 } from "../components/screens/PostGame2";
// import { Game3 } from "../components/screens/Game3";
// import { PostGame3 } from "../components/screens/PostGame3";

import { SCREENS } from "./screens";

export const screens = {
    [SCREENS.INTRO]: Intro,
    [SCREENS.REG_1]: Registration1,
    [SCREENS.REG_2]: Registration2,
    [SCREENS.LOGIN]: Login,
    [SCREENS.START]: Start,
    [SCREENS.WEEK1]: Week1,
    [SCREENS.LOBBY1]: Lobby1,
};

export const preloadImages = [];
