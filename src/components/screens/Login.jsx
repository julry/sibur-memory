import styled from "styled-components";
import { SCREENS } from "../../constants/screens";
import { Button } from "../shared/Button";
import { useProgress } from "../../contexts/ProgressContext";
import { useState } from "react";
import { Block } from "../shared/Block";
import { Logo } from "../shared/Logo";
import { Input } from "../shared/Input";
import { FlexWrapper } from "../shared/FlexWrapper";
import { BackButton } from "../shared/BackButton";
import { useSizeRatio } from "../../hooks/useSizeRatio";
import { WEEK_TO_SCREEN } from "../../constants/weekToScreens";
import { getUserInfo } from "../../utils/getUserInfo";
import { emailRegExp } from "../../constants/regexp";

const Wrapper = styled(FlexWrapper)`
    padding: var(--spacing_x7) var(--spacing_x4) 0;
`;

const ButtonStyled = styled(Button)`
    margin-top: var(--spacing_x5);
    width: ${({$ratio}) => $ratio * 155}px;
`;

const Text = styled.p`
    margin-bottom: var(--spacing_x5);
    text-align: center;
`;

const BackButtonStyled = styled(BackButton)`
    position: absolute;
    top: var(--spacing_x4);
    left: var(--spacing_x4);
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: ${({$isWrong}) => $isWrong ? 'space-between' : 'center'};
    width: 100%;
`;

const SmallText = styled.p`
    margin-top: var(--spacing_x2);
    font-weight: 300;
    font-size: var(--font_xs);
`;

export const Login = () => {
    const ratio = useSizeRatio();
    const [email, setEmail] = useState('');
    const [isWrong, setIsWrong] = useState(false);
    const { 
        next, setUserInfo, setPassedWeeks, setPoints, setVipPoints, setWeekPoints,
        setPassedLevelsWeek1, setPassedLevelsWeek2, setPassedLevelsWeek3, setPassedLevelsWeek4,
    } = useProgress();

    const handleNext = async () => {
        if (!!email && !email.match(emailRegExp)) {
            setIsWrong(true);
            return;
        }
        
        const info = await getUserInfo(email);

        if (info.isError) {
            setIsWrong(true);
            return;
        }
        const { userInfo, passedWeeks: passedWeeks, points, weekPoints, vipPoints, passedLevels } = info;

        // setUserInfo({...userInfo});
        // setPassedWeeks(passedWeeks);
        // setPoints(points);
        // setWeekPoints(weekPoints);
        // setVipPoints(vipPoints);
        // setPassedLevelsWeek1(passedLevels[1]);
        // setPassedLevelsWeek4(passedLevels[2]);
        // setPassedLevelsWeek3(passedLevels[3]);
        // setPassedLevelsWeek2(passedLevels[4]);

        if (userInfo.seenInfo || passedWeeks?.length > 0) {
            next(WEEK_TO_SCREEN[passedWeeks?.length + 1]);

            return;
        }

        next(SCREENS.START);
    }

    return (
        <Wrapper>
            <Logo />
            <BackButtonStyled onClick={()=> next(SCREENS.INTRO)}/>
            <Block>
                <Text>
                    Рады видеть тебя снова!{'\n\n'}
                    Введи свою почту, чтобы оказаться{' '}
                    в месте, где ты закончил в прошлый раз:
                </Text>
                <Input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                {isWrong && <SmallText>Ой! Такой почты нет. Попробуй ввести снова или зарегистрируйся, чтобы начать играть.</SmallText>}
                <ButtonsWrapper $isWrong={isWrong}>
                    {isWrong && (<ButtonStyled color="green2" onClick={() => next(SCREENS.REG_1)}>Регистрация</ButtonStyled>)}
                    <ButtonStyled disabled={!email} $ratio={ratio} color="green" onClick={handleNext}>Готово</ButtonStyled>
                </ButtonsWrapper>
            </Block>
        </Wrapper>
    )
}