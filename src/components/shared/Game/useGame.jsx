import { useState, useCallback, useEffect } from 'react'
import { useProgress } from '../../../contexts/ProgressContext';

const DELAY_TIME = 1000

const checkWinCondition = (deck) => deck.every((card) => card.matched);

const isSameCard = (cardOne, cardTwo) =>
  cardOne.imageName === cardTwo.imageName

const initBoard = (deck) =>
  [...deck, ...deck]
    .sort(() => Math.random() - 0.5)
    .map((card, ind) => ({ ...card, id: card.id + ind, matched: false }))

export default function useMemoryGame(
  selectedDeck = [],
) {
    const [deck, setDeck] = useState(initBoard(selectedDeck));
    const [cardSelectedOne, setCardSelectedOne] = useState(null);
    const [cardSelectedTwo, setCardSelectedTwo] = useState(null);
    const [matches, setMatches] = useState(0);
    const [cardInfo, setCardInfo] = useState();
    const [isLast, setIsLast] = useState(true);

    const initGame = useCallback(() => {
        setDeck(initBoard(selectedDeck))
        setCardSelectedOne(null)
        setCardSelectedTwo(null)
        setMatches(0)
    }, [selectedDeck])

    const completePhase = () => {
        setTimeout(() => {
            setCardSelectedOne(null)
            setCardSelectedTwo(null)
        }, DELAY_TIME)
    }

    const completeGame = () => {
        setIsLast(true);
    }

    const handleSelection = (card) => {
        if (cardSelectedOne && cardSelectedTwo) return;
        if (cardSelectedOne && cardSelectedOne.id !== card.id) setCardSelectedTwo(card);
        else setCardSelectedOne(card)
    }

    const checkSelection = useCallback(() => {
        if (cardSelectedOne && cardSelectedTwo) {
        if (isSameCard(cardSelectedOne, cardSelectedTwo)) {
            setTimeout(() => setCardInfo(cardSelectedOne), DELAY_TIME * 0.95);
            setMatches((prevValue) => prevValue + 1)
            setDeck((prevCards) =>
                prevCards.map((card) =>
                    isSameCard(card, cardSelectedOne)
                    ? { ...card, matched: true }
                    : card
                )
            )
        }

        completePhase()
        }
    }, [cardSelectedOne, cardSelectedTwo])

    useEffect(() => {
        if (checkWinCondition(deck)) completeGame()
    }, [deck])

    useEffect(() => {
        checkSelection()
    }, [checkSelection]);

    return {
        cardSelectedOne,
        cardSelectedTwo,
        deck,
        handleSelection,
        initGame,
        matches,
        cardInfo,
        setCardInfo,
        isLast
    }
}