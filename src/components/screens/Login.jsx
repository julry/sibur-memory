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
    const { next, user, setUserInfo } = useProgress();

    const handleNext = () => {
        // get user info
        // setUserInfo
        // then
        if (!isWrong) {
            setIsWrong(true);
            return;
        }
        if (user.seenInfo) next(SCREENS.WEEK1);
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
                    <ButtonStyled $ratio={ratio} color="green" onClick={handleNext}>Готово</ButtonStyled>
                </ButtonsWrapper>
            </Block>
        </Wrapper>
    )
}