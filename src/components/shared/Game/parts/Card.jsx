import { motion } from 'framer-motion'
import styled from 'styled-components';

import cardShirt from '../assets/cardShirt.svg';

const CardWrapper = styled.div`
    border-radius: calc(var(--cardSize) * 0.075);
    height: var(--cardSize);
    width: var(--cardSize);
    background-color: transparent;
    perspective: 1000px;
    cursor: pointer;
    position: relative;
`;

const AnimatedWrapper = styled(motion.div)`
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
`;

const CardSide = styled(motion.img)`
    position: absolute;
    inset: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: var(--cardBorder);
`;

const FrontSide = styled(motion.div)`
    position: absolute;
    inset: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: linear-gradient(45deg, rgba(149,125,77,1) 15%, rgba(241,233,207,1) 50%, rgba(149,125,77,1) 87%);
    border-radius: var(--cardBorder);
    & img {
      border-radius: var(--cardBorder);
      width: var(--imageSmall);
      height: var(--imageSmall);
    }
`;

export const Card = ({
  card,
  onCardClick,
  flipped,
}) => {
  const handleClick = () => onCardClick(card);

  return (
    <CardWrapper>
      <AnimatedWrapper
        animate={{
          rotateY: flipped ? '180deg' : '0deg',
          transition: {
            duration: 0.8,
          },
        }}
      >
        {card.isTask ? (
          <FrontSide style={{ rotateY: '180deg' }}>
              <img src={card.image} alt={card.name}/>
          </FrontSide>
        ) : (
          <CardSide
            src={card.image}
            style={{ rotateY: '180deg' }}
            alt={card.name}
          />
        )}
        
        <CardSide
          src={cardShirt}
          alt=""
          onClick={handleClick}
        />
      </AnimatedWrapper>
    </CardWrapper>
  )
}