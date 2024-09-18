export const SCREENS = {
    INTRO: 'INTRO',
    REG_1: 'REG_1',
    REG_2: 'REG_2',
    LOGIN: 'LOGIN',
    LOBBY1: 'LOBBY1',
    LOBBY2: 'LOBBY2',
    LOBBY3: 'LOBBY3',
    LOBBY4: 'LOBBY4',
    START: 'START',
    WEEK1: 'WEEK1',
    WEEK2: 'WEEK2',
    WEEK3: 'WEEK3',
    WEEK4: 'WEEK4',
    GAME1_1: 'GAME1_1',
    POST_LEVEL1_1: 'POST_LEVEL1_1',
    GAME1_2: 'GAME1_2',
    POST_LEVEL1_2: 'POST_LEVEL1_2',
    GAME1_3: 'GAME1_3',
    POST_LEVEL1_3: 'POST_LEVEL1_3',
    POST_GAME1: 'POST_GAME1',
    GAME2_1: 'GAME2_1',
    POST_LEVEL2_1: 'POST_LEVEL2_1',
    GAME2_2: 'GAME2_2',
    POST_LEVEL2_2: 'POST_LEVEL2_2',
    GAME2_3: 'GAME2_3',
    POST_LEVEL2_3: 'POST_LEVEL2_3',
    POST_GAME2: 'POST_GAME2',
    GAME3_1: 'GAME3_1',
    POST_LEVEL3_1: 'POST_LEVEL3_1',
    GAME3_2: 'GAME3_2',
    POST_LEVEL3_2: 'POST_LEVEL3_2',
    GAME3_3: 'GAME3_3',
    POST_LEVEL3_3: 'POST_LEVEL3_3',
    POST_GAME3: 'POST_GAME3',
    GAME4: 'GAME4',
    POST_GAME4: 'POST_GAME4',
    POST_LEVEL4: 'POST_LEVEL4',
    PROFILE: 'PROFILE',
    LIBRARY1: 'LIBRARY1',
    LIBRARY2: 'LIBRARY2',
    LIBRARY3: 'LIBRARY3',
    LIBRARY4: 'LIBRARY4',
    FINISH: 'FINISH',
}

export const NEXT_SCREENS = {
    [SCREENS.REG_1]: SCREENS.REG_2,
    [SCREENS.REG_2]: SCREENS.START,
    [SCREENS.START]: SCREENS.WEEK1,
    [SCREENS.WEEK1]: SCREENS.LOBBY1,
    [SCREENS.WEEK2]: SCREENS.LOBBY2,
    [SCREENS.WEEK3]: SCREENS.LOBBY3,
    [SCREENS.WEEK4]: SCREENS.LOBBY4,
    [SCREENS.GAME1_1]: SCREENS.POST_LEVEL1_1,
    [SCREENS.GAME1_2]: SCREENS.POST_LEVEL1_2,
    [SCREENS.GAME1_3]: SCREENS.POST_LEVEL1_3,
    [SCREENS.POST_LEVEL1_1]: SCREENS.GAME1_2,
    [SCREENS.POST_LEVEL1_2]: SCREENS.GAME1_3,
    [SCREENS.POST_LEVEL1_3]: SCREENS.POST_GAME1,
    [SCREENS.GAME2_1]: SCREENS.POST_LEVEL2_1,
    [SCREENS.GAME2_2]: SCREENS.POST_LEVEL2_2,
    [SCREENS.GAME2_3]: SCREENS.POST_LEVEL2_3,
    [SCREENS.POST_LEVEL2_1]: SCREENS.GAME2_2,
    [SCREENS.POST_LEVEL2_2]: SCREENS.GAME2_3,
    [SCREENS.POST_LEVEL2_3]: SCREENS.POST_GAME2,
    [SCREENS.GAME3_1]: SCREENS.POST_LEVEL3_1,
    [SCREENS.GAME3_2]: SCREENS.POST_LEVEL3_2,
    [SCREENS.GAME3_3]: SCREENS.POST_LEVEL3_3,
    [SCREENS.POST_LEVEL3_1]: SCREENS.GAME3_2,
    [SCREENS.POST_LEVEL3_2]: SCREENS.GAME3_3,
    [SCREENS.POST_LEVEL3_3]: SCREENS.POST_GAME3,
    [SCREENS.GAME4]: SCREENS.POST_LEVEL4,
    [SCREENS.POST_LEVEL4]: SCREENS.POST_GAME4,
}
