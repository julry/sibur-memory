// import { Game1 } from "../components/screens/Game1";
import { Intro } from "../components/screens/Intro";
import { Lobby1, Week1, Game11, Game12, Game13, PostGame1, PostLevel11, PostLevel12, PostLevel13, Library1 } from "../components/screens/week1";
import { Lobby2, Week2, Game21, Game22, Game23, PostGame2, PostLevel21, PostLevel22, PostLevel23, Library2 } from "../components/screens/week2";
import { Lobby3, Week3, Game31, Game32, Game33, PostGame3, PostLevel31, PostLevel32, PostLevel33, Library3 } from "../components/screens/week3";
import { Login } from "../components/screens/Login";
import { Registration1 } from "../components/screens/Registration1";
import { Registration2 } from "../components/screens/Registration2";
import { Start } from "../components/screens/Start";
import { Profile } from "../components/screens/Profile";
import { SCREENS } from "./screens";

import plain from '../assets/images/plain.png';
import bus from '../assets/images/bus.png';
import graf from '../assets/images/graf.png';
import work from '../assets/images/work.png';
import balance from '../assets/images/balance.png';
import coworker from '../assets/images/coworker.png';
import leaf from '../assets/images/leaf.png';
import lab from '../assets/images/lab.png';
import money from '../assets/images/money.png';
import clock from '../assets/images/clock.png';
import prof from '../assets/images/prof.png';
import workers from '../assets/images/workers.png';
import sport from '../assets/images/sport.png';
import seasons from '../assets/images/seasons.png';
import engenier from '../assets/images/engenier.png';
import art from '../assets/images/art.png';
import animals from '../assets/images/animals.png';
import worker from '../assets/images/worker.png';
import nature from '../assets/images/nature.png';
import hobby from '../assets/images/hobby.png';
import gaming from '../assets/images/gaming.png';
import communication from '../assets/images/communication.png';
import working from '../assets/images/working.png';
import edu from '../assets/images/edu.png';
import mission from '../assets/images/mission.png';
import adaptation from '../assets/images/adaptation.png';
import animals2 from '../assets/images/animals2.png';
import cinema from '../assets/images/cinema.png';
import conference from '../assets/images/conference.png';
import coworking2 from '../assets/images/coworking2.png';
import ecology from '../assets/images/ecology.png';
import help from '../assets/images/help.png';
import meetings from '../assets/images/meetings.png';
import parties from '../assets/images/parties.png';
import respect from '../assets/images/respect.png';
import safity from '../assets/images/safity.png';
import sport2 from '../assets/images/sport2.png';
import sport3 from '../assets/images/sport3.png';
import sport4 from '../assets/images/sport4.png';
import level1bg from '../assets/images/level1bg.png';
import level2bg from '../assets/images/level2bg.png';
import level3bg from '../assets/images/level3bg.png';
import team from '../assets/images/team.png';
import cinema2 from '../assets/images/cinema2.png';
import value from '../assets/images/value.png';
import nature2 from '../assets/images/nature2.png';
import worktravelling from '../assets/images/worktravelling.png';
import culture from '../assets/images/culture.png';
import motivation from '../assets/images/motivation.png';
import review from '../assets/images/review.png';
import forums from '../assets/images/forums.png';

import engenier31 from '../assets/images/engenier31.png';
import operator3 from '../assets/images/operator3.png';
import engenier312 from '../assets/images/engenier312.png';
import pilot3 from '../assets/images/pilot3.png';
import defect3 from '../assets/images/defect3.png';
import energetic3 from '../assets/images/energetic3.png';
import slesar from '../assets/images/slesar.png';
import device3 from '../assets/images/device3.png';
import water32 from '../assets/images/water32.png';
import emissions from '../assets/images/emissions.png';
import trees32 from '../assets/images/trees32.png';
import greenPrize from '../assets/images/greenPrize.png';
import invest from '../assets/images/invest.png';
import edu32 from '../assets/images/edu32.png';
import wastes from '../assets/images/wastes.png';
import greenhouse from '../assets/images/greenhouse.png';
import age33 from '../assets/images/age33.png';
import boddy33 from '../assets/images/boddy33.png';
import career33 from '../assets/images/career33.png';
import directions33 from '../assets/images/directions33.png';
import enterprises33 from '../assets/images/enterprises33.png';
import goods3 from '../assets/images/goods3.png';
import women33 from '../assets/images/women33.png';
import young33 from '../assets/images/young33.png';

export const screens = {
    [SCREENS.INTRO]: Intro,
    [SCREENS.REG_1]: Registration1,
    [SCREENS.REG_2]: Registration2,
    [SCREENS.LOGIN]: Login,
    [SCREENS.START]: Start,
    [SCREENS.WEEK1]: Week1,
    [SCREENS.WEEK2]: Week2,
    [SCREENS.LOBBY1]: Lobby1,
    [SCREENS.LOBBY2]: Lobby2,
    [SCREENS.LOBBY3]: Lobby3,
    // [SCREENS.LOBBY4]: Lobby4,
    [SCREENS.GAME1_1]: Game11,
    [SCREENS.GAME1_2]: Game12,
    [SCREENS.GAME1_3]: Game13,
    [SCREENS.POST_GAME1]: PostGame1,
    [SCREENS.POST_LEVEL1_1]: PostLevel11,
    [SCREENS.POST_LEVEL1_2]: PostLevel12,
    [SCREENS.POST_LEVEL1_3]: PostLevel13,
    [SCREENS.LIBRARY1]: Library1,
    [SCREENS.GAME2_1]: Game21,
    [SCREENS.GAME2_2]: Game22,
    [SCREENS.GAME2_3]: Game23,
    [SCREENS.POST_GAME2]: PostGame2,
    [SCREENS.POST_LEVEL2_1]: PostLevel21,
    [SCREENS.POST_LEVEL2_2]: PostLevel22,
    [SCREENS.POST_LEVEL2_3]: PostLevel23,
    [SCREENS.LIBRARY2]: Library2,
    [SCREENS.LIBRARY3]: Library3,
    [SCREENS.GAME3_1]: Game31,
    [SCREENS.GAME3_2]: Game32,
    [SCREENS.GAME3_3]: Game33,
    [SCREENS.POST_GAME3]: PostGame3,
    [SCREENS.POST_LEVEL3_1]: PostLevel31,
    [SCREENS.POST_LEVEL3_2]: PostLevel32,
    [SCREENS.POST_LEVEL3_3]: PostLevel33,
    [SCREENS.PROFILE]: Profile,
};

export const preloadImages = [
    adaptation, animals, animals2, art, balance, bus, cinema, cinema2,  clock, communication, conference, coworker,
    coworking2, culture, ecology, edu, engenier, forums, gaming, graf, help, hobby, lab, leaf, level1bg, level2bg, level3bg, 
    meetings, mission, money, motivation, nature, nature2, parties, plain, prof, respect, review, safity, seasons, sport, 
    sport2, sport3, sport4, team, value, work, worker, workers, working, worktravelling,
    engenier31, operator3,engenier312, pilot3,
    defect3,
    energetic3,
    slesar,
    device3,
    water32,
    emissions,
    trees32,
    greenPrize,
    invest,
    edu32,
    wastes,
    greenhouse,
    age33,
    boddy33,
    career33,
    directions33,
    enterprises33,
    goods3,
    women33,
    young33,
];
