export const getUserInfo = async (email) => {
    let userInfo = {};
    let passedWeeks = [];
    let passedLevelsWeek1 = [];
    let passedLevelsWeek2 = [];
    let passedLevelsWeek3 = [];
    let passedLevelsWeek4 = [];
    let points = 0;
    let weekPoints = 0;
    let vipPoints = 0;

    try {
        // const record = await ftClient.finddata({ email });
        // const {data, uuid} = record;
        const uuid = 12313132;
        const data = {
            id: '13526413',
            name: 'Иванов Иван',
            email: 'ivan2001@mail.ru',
            university: 'ННГУ им. Лобачевского',
            fac: 'Факультет химических технологий, промышленной экологии и биотехнологий',
            isTarget: true,
            seenRules: false,
            isTgConnected: false,
            weekLeafs: '',
            seenWeekInfo: false,
            registerWeek: 1,
            points: 0,
            weekPoints: 0,
            targetPoints: 0,
            passedWeeks: '',
            seenInfo: false
        };

        userInfo = {
            recordId: uuid,
            id: data.id,
            name: data.name,
            email,
            university: data.university,
            fac: data.fac,
            isVip: data.isTarget,
            seenRules: data.seenRules,
            seenInfo: data.seenInfo,
            isTgConnected: data.isTgConnected,
            weekLeafs: data.weekLeafs.replace(' ', '').split(',').map((l) => +l.trim()),
            seenWeekInfo:  data.seenWeekInfo,
            registerWeek: data.registerWeek,
        };

        passedWeeks = data.passedWeeks.replace(' ', '').split(',').map((l) => +l.trim());
        passedLevelsWeek1 = data.passedLevelsWeek1.replace(' ', '').split(',').map((l) => +l.trim());
        passedLevelsWeek2 = data.passedLevelsWeek2.replace(' ', '').split(',').map((l) => +l.trim());
        passedLevelsWeek3 = data.passedLevelsWeek3.replace(' ', '').split(',').map((l) => +l.trim());
        passedLevelsWeek4 = data.passedLevelsWeek4.replace(' ', '').split(',').map((l) => +l.trim());
        points = data.points;
        weekPoints = data.weekPoints;
        vipPoints = data.targetPoints;

        return { userInfo, passedWeeks, points, weekPoints, vipPoints, passedLevels: {1: passedLevelsWeek1, 2: passedLevelsWeek2, 3: passedLevelsWeek3, passedLevelsWeek4} };
    }
    catch (e) {
        return { isError: true };
    }
}