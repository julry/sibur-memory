import styled from "styled-components";
import { useProgress } from "../../../contexts/ProgressContext";
import { useSizeRatio } from "../../../hooks/useSizeRatio";
import { Block } from "../Block";
import { Button } from "../Button";
import { Modal } from "./Modal";

const ModalStyled = styled(Modal)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        text-align: center;
        font-size: var(--font_md);
    }
`;

const ButtonStyled = styled(Button)`
    margin-top: var(--spacing_x5);
    width: ${({$ratio}) => $ratio * 343}px;
`;

const List = styled.div`
    padding-left: var(--spacing_x8);
    text-align: left;
    font-size: var(--font_md);

    & li::marker {
        font-size: var(--font_sm);
    }

    & li + li {
        margin-top: var(--spacing_x4);
    }
`;

export const CoinsRulesModal = (props) => {
    const {user} = useProgress();
    const ratio = useSizeRatio();

    return (
        <ModalStyled isDarken>
            <Block isWhite>
                <List>
                    <ul>
                        <li>
                            За каждый пройденный уровень даётся 3 монетки.
                        </li>
                        <li>
                            За каждую полностью завершённую неделю — 10 монеток.
                        </li>
                        <li>
                            За каждый правильный ответ на вопрос в золотых карточках — 5 монеток.
                        </li>
                    </ul>
                </List>
                <br /> 
                {user.isVip ? (
                    <p>
                        Монетки используются для <b>еженедельных розыгрышей</b>.{'\n'}
                        Они суммируются в течение недели{' '}
                        и в начале следующей <b>сгорают</b>.
                    </p>
                ) : (
                    <p>
                        Монетки для розыгрыша <b>суммируются</b> в течение всех 4 недель игры.
                    </p>
                )}
            </Block>
            <ButtonStyled $ratio={ratio} onClick={props.onClose}>Понятно</ButtonStyled>
        </ModalStyled>
    )
}