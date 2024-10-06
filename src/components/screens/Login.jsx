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

const InputStyled = styled(Input)`
    ${({$isIncorrect}) => $isIncorrect ? 'border: 1px solid var(--color-red); color: var(--color-red)' : ''}
`;

export const Login = () => {
    const ratio = useSizeRatio();
    const [email, setEmail] = useState('');
    const [isWrong, setIsWrong] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const { next, getUserInfo, currentWeek } = useProgress();

    const handleNext = async () => {
        if (isSending) return;

        if (!!email && !email.match(emailRegExp)) {
            setIsWrong(true);
            return;
        }

        setIsSending(true);
        
        const info = await getUserInfo(email.toLowerCase());

        setIsSending(false);

        const {userInfo, passed} = info;

        if (info.isError) {
            setIsWrong(true);
            return;
        }

        if (currentWeek >= 5) {
            next(SCREENS.LOBBY1);

            return;
        }

        if (userInfo.seenInfo || passed?.length > 0) {
            let week = passed?.length > 0 ? passed[passed.length - 1] + 1 : 1;
            week = week > currentWeek ? currentWeek : week;
            next(WEEK_TO_SCREEN[week]);

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
                <InputStyled $isIncorrect={isWrong} placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                {isWrong && <SmallText>Ой! Такой почты нет. Попробуй ввести снова или зарегистрируйся, чтобы начать играть.</SmallText>}
                <ButtonsWrapper $isWrong={isWrong}>
                    {isWrong && (<ButtonStyled color="green2" onClick={() => next(SCREENS.REG_1)}>Регистрация</ButtonStyled>)}
                    <ButtonStyled disabled={!email || isSending} $ratio={ratio} color="green" onClick={handleNext}>Готово</ButtonStyled>
                </ButtonsWrapper>
            </Block>
        </Wrapper>
    )
}