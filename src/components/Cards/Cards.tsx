import Card from '../Card';
import { Box } from '../shared';
import styles from './Cards.module.css';
import { IPokemon } from '../../types/pokemonTypes';
import { useEffect, useState } from 'react';

interface ICardsProps {
  pokemon: IPokemon | null;
  pokemonList: IPokemon[];
  onSetChosenPokemon: (p: IPokemon | null) => void;
}

const Cards = ({ pokemon, pokemonList, onSetChosenPokemon }: ICardsProps) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    if (!pokemon) {
      setActiveId(null);
    }
  }, [pokemon]);

  const handleClickShowMore = (inputPokemonData: IPokemon) => {
    if (activeId && activeId === inputPokemonData.id) {
      onSetChosenPokemon(null);
      onSetActiveState(null);
    } else {
      onSetChosenPokemon(inputPokemonData);
      onSetActiveState(inputPokemonData.id);
    }
  };

  const onSetActiveState = (id: number | null) => setActiveId(id);

  const cards = pokemonList.map(({ id, ...props }) => (
    <Card
      key={id}
      id={id}
      {...props}
      handleClickShowMore={handleClickShowMore}
      isActive={id === activeId}
    />
  ));

  return (
    <Box
      className={`${styles['cards-box']} ${activeId && styles['cards-hidden']}`}
    >
      {...cards}
    </Box>
  );
};

export default Cards;
