import styled from "styled-components";
import intro from '../../assets/images/intro.png';
import { useSizeRatio } from "../../hooks/useSizeRatio";
import { Button } from "../shared/Button";
import { useProgress } from "../../contexts/ProgressContext";
import { SCREENS } from "../../constants/screens";
import { Block } from "../shared/Block";
import { Logo } from "../shared/Logo";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: var(--spacing_x7) var(--spacing_x4) 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Picture = styled.div`
    position: absolute;
    inset: 0;
    background: url(${intro}) no-repeat center 100% / cover;
`;

const BlockStyled = styled(Block)`
    position: relative;
    z-index: 2;
`;

const Text = styled.p`
    width: 100%;
    text-align: center;
    font-size: var(--font_lg);
`;

const ButtonWrapper = styled.div`
    margin-top: var(--spacing_x5);
    display: flex;
    width: 100%;
    justify-content: space-between;

    & button {
       width: calc((100% - var(--spacing_x2) )/ 2);
    }
`;

export const Intro = () => {
    const {next, currentWeek} = useProgress();

    const handleReg = () => {
        let nextScr = SCREENS.REG_1;

        if (currentWeek === 5) {
            nextScr = SCREENS.PLUG;
        }

        next(nextScr);
    }

    return (
        <Wrapper>
            <Logo />
            <Picture />
            <BlockStyled>
                <Text>
                    Привет, и добро пожаловать в игру от компании СИБУР. Целый месяц ты будешь тренировать память и внимание и получать подарки!
                    {'\n\n'}
                    <b>Ты тут в первый раз?</b>
                </Text>
                <ButtonWrapper>
                    <Button color="green" onClick={handleReg}>Да</Button>
                    <Button color="red" onClick={() => next(SCREENS.LOGIN)}>Нет</Button>
                </ButtonWrapper>
            </BlockStyled>
        </Wrapper>
    )
};
