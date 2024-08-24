import styled from "styled-components";
import { SCREENS } from "../../constants/screens";
import { Button } from "../shared/Button";
import { Select } from "../shared/Select";
import { useProgress } from "../../contexts/ProgressContext";
import { useState } from "react";
import { faculties, universities } from "../../constants/universities";
import { Block } from "../shared/Block";
import { Logo } from "../shared/Logo";
import { FlexWrapper } from "../shared/FlexWrapper";

const Wrapper = styled(FlexWrapper)`
    padding: var(--spacing_x7) var(--spacing_x4) 0;
`;

const ButtonStyled = styled(Button)`
    margin-top: var(--spacing_x8);
`;

const Text = styled.p`
    margin-bottom: var(--spacing_x5);
    text-align: center;
`;

const SelectStyled = styled(Select)`
    margin-top: var(--spacing_small);
`;

export const Registration1 = () => {
    const [univ, setUniv] = useState({});
    const [fac, setFac] = useState('');
    const { next, setUserInfo } = useProgress();

    const handlePicUniversity = (id, name) => {
        if (univ?.id === id) return;
        
        setUniv({id, name});
        setFac('');
    }

    const handleNext = () => {
        setUserInfo({university: univ.name, isVip: !!fac && fac !== 'Другое', fac: fac && fac !== 'Другое' ? '' : fac });
        next();
    }

    const btnDisabled = !univ?.id || (univ.id !== 'other' && !fac);

    return (
        <Wrapper>
            <Logo />
            <Block>
                <Text>
                    Выбери свой ВУЗ и факультет{'\n\n'}
                    У победителей розыгрыша мы проверим студенческий:
                </Text>
                <Select options={universities} placeholder="Вуз" onChoose={handlePicUniversity}/>
                {univ?.id && univ.id !== 'other' && (
                    <SelectStyled 
                        placeholder="Факультет"
                        options={faculties.filter(({university}) => university === univ.id || university === 'all')}
                        onChoose={(_, name) => setFac(name)}
                    />
                )}
                <ButtonStyled color="green" onClick={handleNext} disabled={btnDisabled}>Далее</ButtonStyled>
            </Block>
        </Wrapper>
    )
}