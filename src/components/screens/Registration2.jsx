import styled from "styled-components";
import { uid } from "uid";
import { Button } from "../shared/Button";
import { Input } from "../shared/Input";
import { useProgress } from "../../contexts/ProgressContext";
import { useState } from "react";
import { Block } from "../shared/Block";
import { Logo } from "../shared/Logo";
import { useSizeRatio } from "../../hooks/useSizeRatio";
import { FlexWrapper } from "../shared/FlexWrapper";
import { emailRegExp } from "../../constants/regexp";
import { WEEK_TO_SCREEN } from "../../constants/weekToScreens";
import { SCREENS } from "../../constants/screens";

const Wrapper = styled(FlexWrapper)`
    padding: var(--spacing_x7) var(--spacing_x4) 0;
`;

const Text = styled.p`
    margin-bottom: var(--spacing_x5);
    text-align: center;
`;

const InputStyled = styled(Input)`
    margin-top: var(--spacing_small);
    ${({$isIncorrect}) => $isIncorrect ? 'border: 1px solid var(--color-red); color: var(--color-red)' : ''};
`;

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: var(--spacing_x8);
`;

const ButtonStyled = styled(Button)`
    & + & {
        margin-left:  var(--spacing_x4);
    }
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

const SmallText = styled.p`
    margin-top: var(--spacing_x2);
    font-weight: 300;
    font-size: var(--font_xs);
`;

export const Registration2 = () => {
    const ratio = useSizeRatio();
    const { next, setUserInfo, registrateUser, currentWeek, getUserInfo, user, passedWeeks } = useProgress();
    const [isSending, setIsSending] = useState(false);
    const [isAlreadyHas, setIsAlreadyHas] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [isAgreed, setIsAgreed] = useState('');
    const [isCorrect, setIsCorrect] = useState(true);
    const [refId, setRefId] = useState('');
    const [isNetworkError, setIsNetworkError] = useState(false);
    
    const link = user.isVip ? 'https://memo-sibur.fut.ru/agreement_ff.pdf' : 'https://memo-sibur.fut.ru/agreement.pdf';
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
        setIsAlreadyHas(false);
        setEmail(e.target.value);
    };

    const handleClick = async () => {
        if (isSending) return;
        const res = await getUserInfo(email);

        if (res && !res?.isError) {
            setIsCorrect(false);
            setIsAlreadyHas(true);

            return;
        }
        const id = uid(7);

        setIsSending(true);
        setUserInfo({name: `${name} ${surname}`, email: email.toLowerCase(), registerWeek: currentWeek, id});
        const reg = await registrateUser({name: `${name} ${surname}`, email: email.toLowerCase(), id, refId});
        setIsSending(false);

        if (reg?.isError) {
            setIsNetworkError(true);
            return;
        }

        next();
    }

    const handleEnter = async () => {
        if (user.seenInfo || passedWeeks?.length > 0) {
            const week = passedWeeks?.length > 0 ? passedWeeks[passedWeeks.length - 1] : 1;
            next(WEEK_TO_SCREEN[week]);

            return;
        }

        next(SCREENS.START);
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
                    placeholder="Фамилия*"
                />
                <InputStyled 
                    type="text"
                    value={name} 
                    disabled={isSending}
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Имя*"
                />
                <InputStyled 
                    type="email" 
                    placeholder="E-mail*"
                    value={email} 
                    disabled={isSending}
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    $isIncorrect={!isCorrect}
                />
                {isAlreadyHas && (
                    <SmallText>Ой! Эта почта уже зарегистрирована. Попробуй ввести снова или войди, чтобы начать играть.</SmallText>
                )}
                {
                    user.isVip && (
                        <InputStyled 
                            type="text" 
                            placeholder="ID друга, если тебя пригласили"
                            value={refId} 
                            onChange={(e) => setRefId(e.target.value)}
                            disabled={isSending}
                        />
                    )
                }
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
                        <Link
                            href={"https://doc.fut.ru/personal_data_policy.pdf"}
                            target="_blank"
                        >
                        обработку персональных данных
                        </Link>
                        {" "}и получение информационных сообщений, а также с{' '}
                        <Link
                            href={link}
                            target="_blank"
                        >правилами проведения акции</Link>.
                    </span>
                </RadioButtonLabel>
                {isNetworkError && (
                    <SmallText>Ой! Что-то пошло не так. Попробуй позже</SmallText>
                )}
            </Block>
            <ButtonsWrapper>
                <ButtonStyled color="green" onClick={handleClick} disabled={!name || !email || !isAgreed || !surname || !isCorrect || isAlreadyHas}>
                    Отправить
                </ButtonStyled>
                {isAlreadyHas && (
                    <ButtonStyled color="green2" onClick={handleEnter}>
                        Войти
                    </ButtonStyled>
                )}
            </ButtonsWrapper>
        </Wrapper>
    )
}