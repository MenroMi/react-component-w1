import { Component, Context } from 'react';
import { PokemonContext } from '../../provider/pokemonProvider';
import Card from '../Card';
import { Box } from '../shared';
import styles from './Cards.module.css';
import { IExtendedPokemonContext } from '../../types/contextTypes';

interface CardsState {
  [x: string]: never;
}

interface CardsProps {
  [x: string]: never;
}

class Cards extends Component<CardsProps, CardsState> {
  constructor(props: CardsProps) {
    super(props);
  }
  static contextType: Context<IExtendedPokemonContext> = PokemonContext;
  declare context: React.ContextType<typeof PokemonContext>;

  render = (): React.ReactNode => {
    const { pokemonList } = this.context;
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
}

export default Cards;
