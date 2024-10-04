import styled from "styled-components";
import intro from '../../assets/images/intro.png';
import { Button } from "../shared/Button";
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

const ButtonStyled= styled(Button)`
    margin-top: var(--spacing_x5);
    width: 100%;
`;

export const Plug = () => (
    <Wrapper>
        <Logo />
        <Picture />
        <BlockStyled>
            <Text>
                <b>Упс, игра уже закончилась</b>
                {'\n\n'}
                Следи за другими мероприятиями и проектами СИБУРа на канале!
            </Text>
            <ButtonStyled color="red" onClick={() => window.open('https://t.me/sibur_dao', '_blank')}>Перейти</ButtonStyled>
        </BlockStyled>
    </Wrapper>
)
