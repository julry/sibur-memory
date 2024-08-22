import styled from "styled-components";
import { SCREENS } from "../../constants/screens";
import { Button } from "../shared/Button";
import { Input } from "../shared/Input";
import { useProgress } from "../../contexts/ProgressContext";
import { useState } from "react";
import { Block } from "../shared/Block";
import { Logo } from "../shared/Logo";
import { useSizeRatio } from "../../hooks/useSizeRatio";
import { FlexWrapper } from "../shared/FlexWrapper";

const Wrapper = styled(FlexWrapper)`
    padding: var(--spacing_x7) var(--spacing_x4) 0;
`;

const Text = styled.p`
    margin-bottom: var(--spacing_x5);
    text-align: center;
`;

const InputStyled = styled(Input)`
    margin-top: var(--spacing_small);
`;

const ButtonStyled = styled(Button)`
    margin-top: var(--spacing_x8);
`;

const InputRadioButton = styled.input`
  display: none;
`;

const RadioIconStyled = styled.div`
  position: relative;
  flex-shrink: 0;
  width: var(--spacing_x5);
  height: var(--spacing_x5);
  background-color: var(--color-white);
  box-shadow: inset 0 0 0 2px var(--color-green2);
  border-radius: var(--border-radius-xs);
  margin-right: var(--spacing_small);
`;

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  font-size: var(--font_xxs);
  color: #818181;
  width: 100%;
  text-align: left;
  margin-top: var(--spacing_x5);
  width: 100%;

  & ${InputRadioButton}:checked + ${RadioIconStyled}::after {
    content: '';
    position: absolute;
    top: ${({$ratio}) => $ratio * 11}px;
    left: 0;
    width: ${({$ratio}) => $ratio * 10}px;
    height: ${({$ratio}) => $ratio * 2.5}px;
    transform: rotate(45deg);
    background-color: var(--color-green3);
    border-radius: ${({$ratio}) => $ratio * 5}px;
  }

  & ${InputRadioButton}:checked + ${RadioIconStyled}::before {
    content: '';
    position: absolute;
    top:  ${({$ratio}) => $ratio * 2.5}px;
    right: ${({$ratio}) => $ratio * 6}px;
    width: ${({$ratio}) => $ratio * 2.5}px;
    height: ${({$ratio}) => $ratio * 15.5}px;
    transform: rotate(-135deg);
    background-color: var(--color-green3);
    border-radius: ${({$ratio}) => $ratio * 5}px;

  }
`;

const Link = styled.a`
  color: inherit;
`;

export const Registration2 = () => {
    const ratio = useSizeRatio();
    const { next, setUserInfo, user } = useProgress();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [isAgreed, setIsAgreed] = useState('');

    const handleClick = () => {
        setUserInfo({name: `${surname} ${name}`, email});
        //send data to serv => user + name, email
        next();
    }

    return (
        <Wrapper>
            <Block>
                <Logo />
                <Text>
                    Для того чтобы отслеживать свой прогресс, заполни свои данные:
                </Text>
                <Input
                    type="text" 
                    value={surname} 
                    onChange={(e) => setSurname(e.target.value)} 
                    placeholder="Фамилия"
                />
                <InputStyled 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Имя"
                />
                <InputStyled 
                    type="email" 
                    placeholder="E-mail"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <RadioButtonLabel $ratio={ratio}>
                    <InputRadioButton
                        type="checkbox"
                        value={isAgreed}
                        checked={isAgreed}
                        onChange={() => setIsAgreed((prevAgreed) => !prevAgreed)}
                    />
                    <RadioIconStyled/>
                    <span>
                        Я согласен(а) на{"\u00A0"}
                        {/* <Link
                        href={"https://fut.ru/personal_data_policy/"}
                        target="_blank"
                        > */}
                        обработку персональных данных
                        {/* </Link>{" "} */}
                        {" "}и получение информационных сообщений, а также с правилами проведения акции.
                    </span>
                </RadioButtonLabel>
            </Block>
            <ButtonStyled color="green" onClick={handleClick} disabled={!name || !email || !isAgreed}>Отправить</ButtonStyled>
        </Wrapper>
    )
}