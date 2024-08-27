import {createContext, useContext, useRef, useState} from 'react'
import {SCREENS, NEXT_SCREENS} from "../constants/screens";
import {screens} from "../constants/screensComponents";
import {getUrlParam} from "../utils/getUrlParam";

const INITIAL_USER = {
    id: '13526413',
    name: 'Иванов Иван',
    email: 'ivan2001@mail.ru',
    university: 'ННГУ им. Лобачевского',
    fac: 'Факультет химических технологий, промышленной экологии и биотехнологий',
    isVip: true,
    seenRules: true,
    isTgConnected: false,
    weekLeafes: [],
    isJustEntered: false,
};

export const CURRENT_WEEK = 2;

const INITIAL_STATE = {
    screen: SCREENS.INTRO,
    points: 0,
    vipPoints: 0,
    weekPoints: 0,
    user: INITIAL_USER,
    passedWeeks: [],
    passedLevelsWeek1: [],
    passedLevelsWeek2: [],
    passedLevelsWeek3: [],
}

const ProgressContext = createContext(INITIAL_STATE);

export function ProgressProvider(props) {
    const {children} = props
    const [currentScreen, setCurrentScreen] = useState(getUrlParam('screen') || INITIAL_STATE.screen);
    // points za igru, сюда добавляем набранные общие звезды 
    const [points, setPoints] = useState(INITIAL_STATE.points);
    // points za недели, сюда добавляем набранные красные звезды для випов
    const [vipPoints, setVipPoints] = useState(INITIAL_STATE.vipPoints);
    const [modal, setModal] = useState({visible: false});
    // points za неделю, сюда добавляем набранные белые звезды для випов
    const [weekPoints, setWeekPoints] = useState(INITIAL_STATE.weekPoints);
    const [gamePoints, setGamePoints] = useState(0);
    const [user, setUser] = useState(INITIAL_STATE.user);
    const [passedWeeks, setPassedWeeks] = useState(INITIAL_STATE.passedWeeks);
    const [passedLevelsWeek1, setPassedLevelsWeek1] = useState(INITIAL_STATE.passedLevelsWeek1);
    const [passedLevelsWeek2, setPassedLevelsWeek2] = useState(INITIAL_STATE.passedLevelsWeek2);
    const [passedLevelsWeek3, setPassedLevelsWeek3] = useState(INITIAL_STATE.passedLevelsWeek3);
    const [hasPassedThisTry, setHasPassedThisTry] = useState(false); 
    const screen = screens[currentScreen];
    const $whiteStarRef = useRef();
    const $redStarRef = useRef();

    const next = (customScreen) => {
        const nextScreen = customScreen ?? NEXT_SCREENS[currentScreen]

        if (!nextScreen) {
            return
        }

        setCurrentScreen(nextScreen)
    }

    const setUserInfo = (user) => {
        setUser(prev => ({...prev, ...user}));
    }

    const passLevel = (level, week) => {
        const addLevel = (arr) => arr.includes(level) ? arr : [...arr, level];

        switch (week) {
            case 1: 
                setPassedLevelsWeek1(addLevel)
                break; 
            case 2: 
                setPassedLevelsWeek2(addLevel)
                break; 
            case 3: 
                setPassedLevelsWeek3(addLevel)
                break;
            default:
                break;
        }
    }

    const addGamePoint = () => setGamePoints(prev => prev + 1);

    const state = {
        screen,
        currentScreen,
        points,
        next,
        setUserInfo, 
        user,
        weekPoints,
        addGamePoint,
        setGamePoints,
        gamePoints,
        vipPoints,
        setModal,
        setVipPoints,
        setWeekPoints,
        setPoints,
        modal,
        passedWeeks,
        setPassedWeeks,
        $whiteStarRef,
        $redStarRef,
        hasPassedThisTry,
        setHasPassedThisTry,
        passedWeekLevels: {
            1: passedLevelsWeek1,
            2: passedLevelsWeek2,
            3: passedLevelsWeek3,
        },
        passLevel
    }

    return (
        <ProgressContext.Provider value={state}>
            {children}
        </ProgressContext.Provider>
    )
}

export function useProgress() {
    return useContext(ProgressContext)
}
