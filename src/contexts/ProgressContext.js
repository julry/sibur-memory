import { FTClient } from 'ft-client';
import {createContext, useContext, useEffect, useRef, useState} from 'react'
import {SCREENS, NEXT_SCREENS} from "../constants/screens";
import {screens} from "../constants/screensComponents";
import {getUrlParam} from "../utils/getUrlParam";

const INITIAL_USER = {
    recordId: '',
    id: '',
    name: '',
    email: '',
    university: '',
    fac: '',
    isVip: true,
    seenRules: false,
    isTgConnected: false,
    weekLeafs: [],
    registerWeek: 2,
    seenInfo: false,
};

const getCurrentWeek = () => {
    const today = new Date();

    if (today < new Date(2024, 8, 16)) return 1;
    if (today < new Date(2024, 8, 23)) return 2;
    if (today < new Date(2024, 8, 30)) return 3;

    return 4;
}

export const CURRENT_WEEK = getCurrentWeek();

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
    passedLevelsWeek4: [],
}

const ProgressContext = createContext(INITIAL_STATE);

export function ProgressProvider(props) {
    const {children} = props;
    // const [currentScreen, setCurrentScreen] = useState(getUrlParam('screen') || INITIAL_STATE.screen);
    const [currentScreen, setCurrentScreen] = useState(INITIAL_STATE.screen);
    // points za igru, сюда добавляем набранные общие звезды 
    const [points, setPoints] = useState(INITIAL_STATE.points);
    // points za недели, сюда добавляем набранные красные звезды для випов
    const [vipPoints, setVipPoints] = useState(INITIAL_STATE.vipPoints);
    const [modal, setModal] = useState({visible: false});
    // points za неделю, сюда добавляем набранные белые звезды для випов
    const [weekPoints, setWeekPoints] = useState(INITIAL_STATE.weekPoints);
    const [currentWeekPoints, setCurrentWeekPoints] = useState(INITIAL_STATE.weekPoints);
    const [gamePoints, setGamePoints] = useState(0);
    const [user, setUser] = useState(INITIAL_STATE.user);
    const [passedWeeks, setPassedWeeks] = useState(INITIAL_STATE.passedWeeks);
    const [passedLevelsWeek1, setPassedLevelsWeek1] = useState(INITIAL_STATE.passedLevelsWeek1);
    const [passedLevelsWeek2, setPassedLevelsWeek2] = useState(INITIAL_STATE.passedLevelsWeek2);
    const [passedLevelsWeek3, setPassedLevelsWeek3] = useState(INITIAL_STATE.passedLevelsWeek3);
    const [passedLevelsWeek4, setPassedLevelsWeek4] = useState(INITIAL_STATE.passedLevelsWeek4);
    const [currentWeek, setCurrentWeek] = useState(CURRENT_WEEK);

    const screen = screens[currentScreen];
    const client = useRef();

    const getDbCurrentWeek = async () => {
        try {
            const { week } = await client.current.loadProjectState();
            if (week && !isNaN(+week)) {
                setCurrentWeek(+week);
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        client.current = new FTClient(
            'https://ft-admin-api.sjuksin.ru/',
            'sibur'
        )
        getDbCurrentWeek();
    }, []);

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
            case 4: 
                setPassedLevelsWeek4(addLevel)
                break;
            default:
                break;
        }
    }

    const addGamePoint = () => setGamePoints(prev => prev + 1);

    const updateUser = async (changed) => {
        const { 
            isVip, recordId, weekLeafs, id, name, email, registerWeek,
            university, fac, isTgConnected, seenRules, seenInfo, seenTg
        } = user;
       
        const data = {
            id,
            name,
            email,
            university,
            fac,
            isTarget: isVip,
            isTgConnected: isTgConnected,
            weekLeafs: weekLeafs.join(','),
            points,
            targetPoints: vipPoints,
            [`week${currentWeek}Points`]: currentWeekPoints,
            seenRules, 
            registerWeek,
            passedWeeks: passedWeeks.join(','),
            passedLevelsWeek1: passedLevelsWeek1.join(','),
            passedLevelsWeek2: passedLevelsWeek2.join(','),
            passedLevelsWeek3: passedLevelsWeek3.join(','),
            passedLevelsWeek4: passedLevelsWeek4.join(','),
            seenInfo,
            seenTg, 
            ...changed,
        };

        try {
            const result = await client.current.updateRecord(recordId, data);

            return result;
        } catch(e) {
            console.log(e);

            return {isError: true, ...data};
        }
    }

    const registrateUser = async ({id, name, email}) => {
        try {
            const data = {
                id,
                name,
                email,
                university: user.university,
                fac: user.fac,
                isTarget: user.isVip,
                points: 0,
                targetPoints: 0,
                isTgConnected: false,
                seenRules: false,
                registerWeek: currentWeek,
                seenInfo: false,
                weekLeafs: '',
                passedWeeks: '',
                passedLevelsWeek1: '',
                passedLevelsWeek2: '',
                passedLevelsWeek3: '',
                passedLevelsWeek4: '',
            };
    
            const userInfo = {
                id,
                name,
                email,
                university: user.university,
                fac: user.fac,
                isVip: user.isVip,
                isTgConnected: false,
                seenRules: false,
                registerWeek: currentWeek,
                seenInfo: false,
                weekLeafs: [],
            };
    
            const record = await client?.current.createRecord(data);
            setUser({...userInfo, recordId: record.id});
            setPoints(INITIAL_STATE.points);
            setVipPoints(INITIAL_STATE.vipPoints);
            setWeekPoints(INITIAL_STATE.weekPoints);
            setCurrentWeekPoints(INITIAL_STATE.weekPoints);
            setPassedLevelsWeek1(INITIAL_STATE.passedLevelsWeek1);
            setPassedLevelsWeek2(INITIAL_STATE.passedLevelsWeek2);
            setPassedLevelsWeek3(INITIAL_STATE.passedLevelsWeek3);
            setPassedLevelsWeek4(INITIAL_STATE.passedLevelsWeek4);
    
            setPassedWeeks(INITIAL_STATE.passedWeeks);
        } catch (e) {
            return {isError: true};
        }
    };

    const getUserInfo = async (email, isAfterTg) => {
        try {
            const record = await client?.current.findRecord('email', email);
            if (!record) return {isError: true}; 
            const {data, id} = record;
            let userInfo = {};
    
            userInfo = {
                recordId: id,
                id: data.id,
                name: data.name,
                email,
                university: data.university,
                fac: data.fac,
                isVip: data.isTarget,
                seenRules: data.seenRules,
                seenInfo: data.seenInfo,
                isTgConnected: data.isTgConnected,
                weekLeafs: data.weekLeafs.length > 0 ? data.weekLeafs.replace(' ', '').split(',').map((l) => +l.trim()) : [],
                registerWeek: data.registerWeek,
                seenTg: data.seenTg,
            };
    
            if (isAfterTg) {
                setUser(prev=> ({...prev, isTgConnected: data.isTgConnected}));
                setPoints(data?.points ?? 0);
                setVipPoints(data?.targetPoints ?? 0);
    
                return;
            }
    
            setUser(userInfo);
            setPassedLevelsWeek1(data?.passedLevelsWeek1?.length > 0 ? 
                data.passedLevelsWeek1.replace(' ', '').split(',').map((l) => +l.trim()) 
                : []);
            setPassedLevelsWeek2(data?.passedLevelsWeek2?.length > 0 ? 
                data.passedLevelsWeek2.replace(' ', '').split(',').map((l) => +l.trim()) 
                : []);
            setPassedLevelsWeek3(data?.passedLevelsWeek3?.length > 0 ? 
                data.passedLevelsWeek3.replace(' ', '').split(',').map((l) => +l.trim()) 
                : []);
            setPassedLevelsWeek4(data?.passedLevelsWeek4?.length > 0 ? 
                data.passedLevelsWeek4.replace(' ', '').split(',').map((l) => +l.trim()) 
                : []);
    
            const passed = data?.passedWeeks?.length > 0 ? data.passedWeeks.replace(' ', '').split(',').map((l) => +l.trim()) : [];
            setPassedWeeks(passed);
            setPoints(data?.points ?? 0);
            setVipPoints(data?.targetPoints ?? 0);
            setWeekPoints(data?.[`week${currentWeek}Points`] ?? 0);
            setCurrentWeekPoints(data?.[`week${currentWeek}Points`] ?? 0);
    
            return {userInfo, passed};
        } catch(e) {
            return {isError: true};
        }
    }


    const setLevelPoints = async (level, week, isLastLevel, curPoints) => {
        const passedWeekLevels = {
            1: passedLevelsWeek1,
            2: passedLevelsWeek2,
            3: passedLevelsWeek3,
            4: passedLevelsWeek4,
        };

        const data = {
            [`passedLevelsWeek${week}`]: [...passedWeekLevels[week], level].join(',')
        };
        
        if (!user.isVip) {
            data.points = points + curPoints;
            
            setPoints(prev =>  prev + curPoints);
        }

        if (user.isVip) {
            if (week === currentWeek) {
                data[`week${week}Points`] = currentWeekPoints + curPoints;
                setCurrentWeekPoints(prev => prev + curPoints);
            }
            setUserInfo({[`week${week}Points`]: user[`week${week}Points`] + curPoints});
        }

        setWeekPoints(prev => prev + curPoints);

        if (isLastLevel) {
            data.passedWeeks = (passedWeeks.includes(week) ? passedWeeks : [...passedWeeks, week]).join(',');

            setPassedWeeks(prev => prev.includes(week) ? prev : [...prev, week]);
        }
        
        passLevel(level, week);
        updateUser(data);
    };
    
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
        passedWeekLevels: {
            1: passedLevelsWeek1,
            2: passedLevelsWeek2,
            3: passedLevelsWeek3,
            4: passedLevelsWeek4,
        },
        passLevel,
        updateUser,
        getUserInfo,
        registrateUser,
        currentWeek,
        setLevelPoints,
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
