import { usePokemonsContext } from '../../provider/pokemonProvider';
import { CloseCrossIcon } from '../Icons';
import { Box } from '../shared';

import styles from './Details.module.css';
import DetailsHeader from './DetailsHeader';
import DetailsMain from './DetailsMain';
import DetailsStatsTable from './DetailsStatsTable';

const Details = () => {
  const { pokemon, onSetChosenPokemon } = usePokemonsContext();

  if (!pokemon) {
    return;
  }

  const { sprites, name, stats } = pokemon;
  const statTitles = ['name', 'base', 'effort'];
  const statNames = stats.map(({ stat }) => stat.name);
  const statBases = stats.map(({ base_stat }) => base_stat);
  const statEfforts = stats.map(({ effort }) => effort);

  return (
    <Box
      className={`${
        pokemon
          ? `${styles.details} ${styles['details-active']}`
          : styles.hidden
      }`}
    >
      <Box className={styles['close-details']}>
        <CloseCrossIcon
          onClick={() => onSetChosenPokemon(null)}
          className={styles['close-details__cross']}
        />
      </Box>

      <DetailsHeader name={name} sprites={sprites} />

      <DetailsMain
        pokemon={pokemon}
        table={
          <DetailsStatsTable
            statBases={statBases}
            statTitles={statTitles}
            statNames={statNames}
            statEfforts={statEfforts}
          />
        }
      />
    </Box>
  );
};

export default Details;
