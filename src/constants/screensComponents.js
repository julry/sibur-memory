// import { Game1 } from "../components/screens/Game1";
import { Intro } from "../components/screens/Intro";
import { Lobby1, Week1, Game11, Game12, Game13, PostGame1, PostLevel11, PostLevel12, PostLevel13 } from "../components/screens/week1";
import { Lobby2 } from "../components/screens/Lobby2";
import { Lobby3 } from "../components/screens/Lobby3";
import { Lobby4 } from "../components/screens/Lobby4";
import { Login } from "../components/screens/Login";
import { Registration1 } from "../components/screens/Registration1";
import { Registration2 } from "../components/screens/Registration2";
import { Start } from "../components/screens/Start";
import { Profile } from "../components/screens/Profile";


import { SCREENS } from "./screens";

export const screens = {
    [SCREENS.INTRO]: Intro,
    [SCREENS.REG_1]: Registration1,
    [SCREENS.REG_2]: Registration2,
    [SCREENS.LOGIN]: Login,
    [SCREENS.START]: Start,
    [SCREENS.WEEK1]: Week1,
    [SCREENS.LOBBY1]: Lobby1,
    [SCREENS.LOBBY2]: Lobby2,
    [SCREENS.LOBBY3]: Lobby3,
    [SCREENS.LOBBY4]: Lobby4,
    [SCREENS.GAME1_1]: Game11,
    [SCREENS.GAME1_2]: Game12,
    [SCREENS.GAME1_3]: Game13,
    [SCREENS.POST_GAME1]: PostGame1,
    [SCREENS.POST_LEVEL1_1]: PostLevel11,
    [SCREENS.POST_LEVEL1_2]: PostLevel12,
    [SCREENS.POST_LEVEL1_3]: PostLevel13,
    [SCREENS.PROFILE]: Profile,
};

export const preloadImages = [];
