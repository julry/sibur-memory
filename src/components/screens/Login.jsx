import styled from "styled-components";
import { SCREENS } from "../../constants/screens";
import { Button } from "../shared/Button";
import { useProgress } from "../../contexts/ProgressContext";
import { useState } from "react";
import { Block } from "../shared/Block";
import { Logo } from "../shared/Logo";
import { Input } from "../shared/Input";
import { FlexWrapper } from "../shared/FlexWrapper";

const Wrapper = styled(FlexWrapper)`
    padding: var(--spacing_x7) var(--spacing_x4) 0;
`;

const ButtonStyled = styled(Button)`
    margin-top: var(--spacing_x5);
`;

const Text = styled.p`
    margin-bottom: var(--spacing_x5);
    text-align: center;
`;

export const Login = () => {
    const [email, setEmail] = useState('');
    const { next, user, setUserInfo } = useProgress();

    const handleNext = () => {
        // get user info
        // setUserInfo
        // then
        if (user.seenInfo) next(SCREENS.WEEK1);
        next(SCREENS.START);
    }

    return (
        <Wrapper>
            <Logo />
            <Block>
                <Text>
                        Рады видеть тебя снова!{'\n\n'}
                        Введи свою почту, чтобы оказаться{' '}
                        в месте, где ты закончил в прошлый раз:
                </Text>
                <Input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <ButtonStyled color="green" onClick={handleNext}>Готово</ButtonStyled>
            </Block>
        </Wrapper>
    )
}