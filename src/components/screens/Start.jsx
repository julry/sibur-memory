import { useState } from "react";
import styled from "styled-components";
import { useProgress } from "../../contexts/ProgressContext";
import { useSizeRatio } from "../../hooks/useSizeRatio";
import { Block } from "../shared/Block";
import { Button } from "../shared/Button";
import { FlexWrapper } from "../shared/FlexWrapper";
import { LobbyHeader } from "../shared/LobbyHeader";

const BlockStyled = styled(Block)`
    margin-top: ${({$ratio}) => $ratio * 99}px;
    text-align: center;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({$isMargin}) => $isMargin ? 'var(--spacing_x5)' : 0};
    width: 100%;
    
    & button + button {
        margin-left: var(--spacing_x2);
        width: calc((100% -  var(--spacing_x2)) / 2);
    }
`;

const ProgressWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: var(--spacing_x5) 0;
`;

const ProgressCircle  = styled.div`
    width: ${({$ratio}) => $ratio * 7}px;
    height: ${({$ratio}) => $ratio * 7}px;
    border-radius: 50%;
    background-color: var(--color-white);
    opacity: ${({$isActive}) => $isActive ? 1 : 0.2};
    transition: opacity 0.2s;

    & + & {
        margin-left:  ${({$ratio}) => $ratio * 7}px;
    }
`;

export const Start = () => {
    const ratio = useSizeRatio();
    const {next, user, setVipPoints, setUserInfo, updateUser} = useProgress();
    const [part, setPart] = useState(user?.part ?? 0);
    const [rulesPart, setRulesPart] = useState(user?.rulesPart ?? 0);
    const progress = Array.from({length: 3}, (v, i) => i);

    const Progress = () => (
        <ProgressWrapper>
            {progress.map((p) => (
                <ProgressCircle key={p} $isActive={p === rulesPart} $ratio={ratio}/>
            ))}
        </ProgressWrapper>
    );

    const getContent = () => {
        let content;
        if (part === 0) {
            return (
                <p>
                    Отлично! Дарим тебе первый {'\n'}<b>листик</b>.{'\n\n'}
                    За каждый последующий заход 
                    в игру на новой неделе ты будешь получать 1 листик.{'\n\n'}
                    Чем больше у тебя листиков, тем выше шансы выиграть <b>главный приз — iPhone 15 Pro Max!</b>
                </p>
            ) 
        } else {
            if (rulesPart === 0) {
                content = (
                    <p>
                        <b>Давай расскажем, что тебя ждёт:</b>
                        <br/>
                        <br/>
                        Всё, что нужно, — <b>переворачивать карточки</b> про карьеру в СИБУРе 
                        и <b>искать одинаковые</b>. Каждую неделю будут открываться 
                        3 новых уровня. 
                    </p>
                )
            }
            if (rulesPart === 1) {
                content = (
                    <p>
                        В конце каждой недели будут разыгрываться призы и мерч.
                        <br />
                        <br />
                        Чтобы участвовать 
                        в еженедельном розыгрыше,{'\n'}необходимо набрать <b>минимум</b>{'\n'}
                        <b>20 монеток</b>. Всего тебя ждёт{'\n'}
                        <b>4 недели игр</b>.
                    </p>
                )
            }
            if (rulesPart === 2) {
                content = (
                    <p>
                       Следи за уведомлениями{'\n'}
                        в <b>Telegram-боте</b>. Если станешь победителем — ищи{' '}
                        <b>стойку{'\n'}СИБУРа в своем вузе</b>, чтобы забрать призы. 
                        <br/> <br/>
                        <b>Важно:{'\n'} </b>
                        с собой необходимо будет взять студенческий!
                    </p>
                )
            }
        }

        return (
            <>
                {content}
                <Progress />
            </>
        )
    };

    const handleNextPage = async () => {
        setUserInfo({seenInfo: true});
        await updateUser({seenInfo: true});
        next();
    }

    const handleNext = () => {
        if (rulesPart === 2 || !user.isVip) {
            handleNextPage();
            return;
        }

        if (part === 0) {
            setPart((prev) => prev + 1);

            if (!user.weekLeafs.includes(1)) {
                setVipPoints(prev => prev + 1);
                setUserInfo({weekLeafs: [...user.weekLeafs, 1]});
            }

            return;
        }

        setRulesPart((prev) => prev + 1);
    };

    return (
        <FlexWrapper>
            <LobbyHeader additional={{part, rulesPart}}/>
            <BlockStyled $ratio={ratio}>
                {!user?.isVip ? (
                    <p>
                        <b>Давай расскажем, что тебя ждёт:</b>
                        <br/>
                        <br/>
                        Всё, что нужно, — <b>переворачивать карточки</b> про карьеру в СИБУРе 
                        и <b>искать одинаковые</b>. Каждую неделю будут открываться 
                        3 новых уровня. {'\n\n'}
                        Всего тебя ждёт <b>4 недели игр</b>.{'\n'}
                        <b>В конце</b> будут разыгрываться призы среди игроков, набравших <b>минимум 75 баллов</b>.
                    </p> 
                ) : getContent()}
                <ButtonsWrapper $isMargin={part === 0}>
                    {rulesPart > 0 && (
                        <Button color="green2" onClick={() => setRulesPart((prev) => prev - 1)}>Назад</Button>
                    )}
                    <Button onClick={handleNext}>Далее</Button>
                </ButtonsWrapper>
            </BlockStyled>
        </FlexWrapper>
    )
}