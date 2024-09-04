import styled from "styled-components";
import level1 from '../../assets/images/level1bg.png';
import level2 from '../../assets/images/level2bg.png';
import level3 from '../../assets/images/level3bg.png';
import { WEEK_TO_LOBBY } from "../../constants/weekToScreens";
import { useProgress } from "../../contexts/ProgressContext";
import { updateUser } from "../../utils/updateUser";
import { BackButton } from "./BackButton";
import { Block } from "./Block";
import { Button } from "./Button";
import { FlexWrapper } from "./FlexWrapper";
import { PointsButton } from "./PointsButton";

const LEVEL_TO_BG = {
    1: level1,
    2: level2,
    3: level3,
};

const BlockStyled = styled(Block)`
    text-align: center;
`;

const Wrapper = styled(FlexWrapper)`
    justify-content: center;
    background: url(${({$level}) => LEVEL_TO_BG[$level]}) no-repeat center 100% / cover; 
`;

const ButtonStyled = styled(Button)`
    margin-top: var(--spacing_x4);
`;

const BackButtonStyled = styled(BackButton)`
    position: absolute;
    top: var(--spacing_x4);
    left: var(--spacing_x4);
`;

const CoinsStyled = styled(PointsButton)`
    margin-top: var(--spacing_x4);
`;

export const PostLevelScreen = ({ level, text, week, isLast }) => {
    const { passLevel, passedWeekLevels, user, setPoints, setWeekPoints, next, gamePoints, setGamePoints, setPassedWeeks } = useProgress();


    const setLevelPoints = () => {
        const data = {
            [`passedLevelsWeek${week}`]: [...passedWeekLevels[week], level].join(',')
        };
        
        if (!user.isVip) {
            setPoints(prev => {
                data.points = prev + gamePoints;

                return  prev + gamePoints;
            });
        }

        setWeekPoints(prev => {
            if (user.isVip) data.weekPoints = prev + gamePoints;

            return prev + gamePoints;
        });

        setGamePoints(0);

        if (isLast) {
            setPassedWeeks(prev => {
                data.passedWeeks =  prev.includes(week) ? prev : [...prev, week];

                return prev.includes(week) ? prev : [...prev, week];
            });
        }
        
        passLevel(level, week);
        updateUser(user.recordId, data);
    }

    const handleNext = () => {
        setLevelPoints();
        next();
    }

    const handlePrev = () => {
        setLevelPoints();
        next(WEEK_TO_LOBBY[week])
    }

    return (
        <Wrapper $level={level}>
            <BackButtonStyled onClick={handlePrev}/>
            <BlockStyled isWhite>
                {text}
                <CoinsStyled text={ gamePoints }/>
            </BlockStyled>
            <ButtonStyled onClick={handleNext}>
                Продолжить
            </ButtonStyled>
        </Wrapper>
    )
}