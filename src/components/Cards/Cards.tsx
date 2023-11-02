import { useContext } from 'react';
import Card from '../Card';
import { Box } from '../shared';
import styles from './Cards.module.css';
import PokemonContext from '../../provider/contex';

const Cards = () => {
  const { pokemonList } = useContext(PokemonContext);

  return (
    <Box className={styles['cards-box']}>
      {pokemonList.map(({ abilities, id, name, stats, types }) => (
        <Card
          key={id}
          id={id}
          abilities={abilities}
          name={name}
          stats={stats}
          types={types}
        />
      ))}
    </Box>
  );
};

export default Cards;
