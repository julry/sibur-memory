import styled from "styled-components";
import { uid } from "uid";
import { Button } from "../shared/Button";
import { Input } from "../shared/Input";
import { CURRENT_WEEK, useProgress } from "../../contexts/ProgressContext";
import { useState } from "react";
import { Block } from "../shared/Block";
import { Logo } from "../shared/Logo";
import { useSizeRatio } from "../../hooks/useSizeRatio";
import { FlexWrapper } from "../shared/FlexWrapper";
import { emailRegExp } from "../../constants/regexp";

const Wrapper = styled(FlexWrapper)`
    padding: var(--spacing_x7) var(--spacing_x4) 0;
`;

const Text = styled.p`
    margin-bottom: var(--spacing_x5);
    text-align: center;
`;

const InputStyled = styled(Input)`
    margin-top: var(--spacing_small);
    ${({$isIncorrect}) => $isIncorrect ? 'border: 1px solid var(--color-red); color: var(--color-red)' : ''}
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
    const [isSending, setIsSending] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [isAgreed, setIsAgreed] = useState('');
    const [isCorrect, setIsCorrect] = useState(true);
    
    const handleBlur = () => {
        if (email.match(emailRegExp) || !email) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const handleChange = (e) => {
        if (isSending) return;
        setIsCorrect(true);
        setEmail(e.target.value);
    };

    const handleClick = () => {
        if (isSending) return;
        const { isVip, ...userProps } = user;
        const id = uid(7);

        setIsSending(true);
        //const recordId = await ftClient.addRecord({
            // ...userProps, isTarget: isVip, name: `${name} ${surname}`, email, registerWeek: CURRENT_WEEK,
            // id, weekLeafs: '', points: 0, weekPoints: 0, targetPoints: 0, passedWeeks: '', passedLevelsWeek1: '',
            // passedLevelsWeek2: '', passedLevelsWeek3: '', passedLevelsWeek4: '',
        // });
        // setUserInfo({recordId, name: `${name} ${surname}`, email, registerWeek: CURRENT_WEEK, id});
        setIsSending(false);
        setUserInfo({name: `${name} ${surname}`, email, registerWeek: CURRENT_WEEK, id});

        //send data to serv => user + name, email
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
                    disabled={isSending}
                    onChange={(e) => setSurname(e.target.value)} 
                    placeholder="Фамилия"
                />
                <InputStyled 
                    type="text" 
                    value={name} 
                    disabled={isSending}
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Имя"
                />
                <InputStyled 
                    type="email" 
                    placeholder="E-mail"
                    value={email} 
                    disabled={isSending}
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    $isIncorrect={!isCorrect}
                />
                <RadioButtonLabel $ratio={ratio}>
                    <InputRadioButton
                        type="checkbox"
                        disabled={isSending}
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
            <ButtonStyled color="green" onClick={handleClick} disabled={!name || !email || !isAgreed || !surname || !isCorrect}>
                Отправить
            </ButtonStyled>
        </Wrapper>
    )
}