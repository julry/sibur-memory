import styled from "styled-components"
import { useSizeRatio } from "../../../../hooks/useSizeRatio";
import { Card } from "./Card";

const Wrapper = styled.div`
    --cardSize: ${({$ratio}) => $ratio * 80}px;
    --imageSmall: ${({$ratio}) => $ratio * 70}px;
    --cardBorder: ${({$ratio}) => $ratio * 10}px;
    display: grid;
    grid-template-columns: repeat(4, var(--cardSize));
    grid-template-rows: repeat(4, var(--cardSize));
    grid-gap: var(--spacing_x2);
`;

export const Board = ({ cards, flippedCards, onCardClick, isShuffling }) => {
    const ratio = useSizeRatio();

    return (
        <Wrapper $ratio={ratio}>
            {cards.map((card, ind) => (
                <Card 
                    key={card.id}
                    card={card}
                    index={ind}
                    onCardClick={onCardClick}
                    isShuffling={isShuffling}
                    flipped={Boolean(
                        card.matched ||
                          flippedCards.find(
                            (flippedCard) => flippedCard && flippedCard.id === card.id
                          )
                      )}
                />
            ))}
        </Wrapper>
    )
}