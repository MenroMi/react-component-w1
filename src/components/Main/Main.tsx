import { Box } from '../shared';
import Cards from '../Cards';
import Loader from '../Loader';
import { BadSearchRequestError, Error } from '../Errors';
import styles from './Main.module.css';
import { usePokemonsContext } from '../../provider/pokemonProvider';
import { Outlet } from 'react-router-dom';

const Main = () => {
  const {
    pokemon,
    isError,
    isFetched,
    isLoading,
    pokemonList,
    onSetChosenPokemon,
  } = usePokemonsContext();

  return (
    <Box
      className={`${styles['main-box']} ${
        !!pokemon && styles['main-box-changed']
      }`}
    >
      {isLoading && !isError && !isFetched && (
        <>
          <Loader className={styles.loader} />
          {pokemonList.length && (
            <Cards
              pokemonList={pokemonList}
              onSetChosenPokemon={onSetChosenPokemon}
              pokemon={pokemon}
            />
          )}
        </>
      )}
      {!isLoading && isError && !isFetched && (
        <Error>
          <BadSearchRequestError />
        </Error>
      )}
      {!isLoading && !isError && isFetched && (
        <Cards
          pokemonList={pokemonList}
          onSetChosenPokemon={onSetChosenPokemon}
          pokemon={pokemon}
        />
      )}

      <Outlet />
    </Box>
  );
};

export default Main;
