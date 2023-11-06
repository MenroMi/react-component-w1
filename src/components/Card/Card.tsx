import { FC } from 'react';
import { Box } from '../shared';
import styles from './Card.module.css';
import { IPokemon } from '../../types/pokemonTypes';

interface ICardProps extends IPokemon {
  isActive: boolean;
  handleClickShowMore: (pokemon: IPokemon) => void;
}

const Card: FC<ICardProps> = ({
  handleClickShowMore,
  isActive,
  id,
  name,
  ...props
}) => {
  return (
    <Box
      className={`${styles.card} ${isActive && styles['card-active']}`}
      onClick={() => handleClickShowMore({ id, name, ...props })}
    >
      <p className={styles['card__name']}>
        {id}. {name}
      </p>
      <p className={styles['card__btn']}>
        {isActive ? 'Hide Info' : 'Show More'}
      </p>
    </Box>
  );
};

export default Card;
