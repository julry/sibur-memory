import { motion } from 'framer-motion'
import styled from 'styled-components';
import { useSizeRatio } from '../../../../hooks/useSizeRatio';

import cardShirt from '../assets/cardShirt.svg';

const CardWrapper = styled(motion.div)`
    position: 'relative';
    border-radius: calc(var(--cardSize) * 0.075);
    height: var(--cardSize);
    width: var(--cardSize);
    background-color: transparent;
    perspective: 1000px;
    cursor: pointer;
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
  isShuffling,
  index
}) => {
  const ratio = useSizeRatio();
  const handleClick = () => onCardClick(card);

  const getShuffleInfo = () => {
    const size = ratio * 80;
    let x, y = 0;

    if ([0, 1, 2, 3].includes(index)) {
      y = size;
    } else if ([8, 9, 10, 11].includes(index)) {
      y = -size;
    }

    if ([0, 4, 8].includes(index)) {
      x = 1.5 * size;
    } else if ([3, 7, 11].includes(index)) {
      x = -1.5 * size;
    } else if ([1, 5, 9].includes(index)) {
      x = 0.5 * size;
    } else if ([2, 6, 10].includes(index)) {
      x = -0.5 * size;
    }

    return {x, y}
  }

  const shuffleInfo = getShuffleInfo();

  return (
    <CardWrapper
        animate={{
          x: isShuffling ? shuffleInfo.x : 0,
          y: isShuffling ? shuffleInfo.y : 0,
        }}
    >
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