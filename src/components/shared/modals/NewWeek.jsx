import styled from "styled-components";
import { CURRENT_WEEK, useProgress } from "../../../contexts/ProgressContext";
import { Block } from "../Block";
import { Modal } from "./Modal";
import { Button } from "../Button";
import { PointsButton } from "../PointsButton";
import { useSizeRatio } from "../../../hooks/useSizeRatio";
import { updateUser } from "../../../utils/updateUser";

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Content = styled(Block)`
    padding-left: var(--spacing_x5);
    padding-right: var(--spacing_x5);
    text-align: center;
`;

const Text = styled.p`
    margin-bottom: var(--spacing_x4);
`

const ButtonStyled = styled(Button)`
    margin: var(--spacing_x4) 0 0;
    width: ${({$ratio}) => $ratio * 343}px;
`;

export const NewWeek = (props) => {
    const ratio = useSizeRatio();
    const { user, setVipPoints, setUserInfo, setModal } = useProgress();

    const handleClick = () => {
        if (!user.weekLeafes.includes(CURRENT_WEEK)) {
            const data = {
                weekStars: [...user.weekStars, CURRENT_WEEK].join(',')
            };

            setVipPoints(prev => {
                data.targetPoints = prev + 1;

                return prev + 1
            });

            setUserInfo({weekStars: [...user.weekStars, CURRENT_WEEK]});
            updateUser(user.recordId, data);
        }

        setModal({visible: false});
        props.onClose();
    }

    return (
        <Modal isDarken isDisabledAnimation>
            <Wrapper>
                <Content isWhite>
                    <Text>
                        Держи листик за заход{'\n'}на новой неделе!
                    </Text>
                    <PointsButton type="leaf" text={1} />
                </Content>
                <ButtonStyled $ratio={ratio} onClick={handleClick}>Далее</ButtonStyled>
            </Wrapper>
        </Modal>
    )
}