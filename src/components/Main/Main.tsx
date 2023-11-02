import { useContext } from 'react';
import PokemonContext from '../../provider/contex';
import { Box } from '../shared';
import Cards from '../Cards';
import Loader from '../Loader';
import { BadSearchRequestError, Error } from '../Errors';
import styles from './Main.module.css';

const Main = () => {
  const { isError, isFetched, isLoading, pokemonList } =
    useContext(PokemonContext);

  return (
    <Box className={styles['main-box']}>
      {isLoading && !isError && !isFetched && (
        <>
          <Loader />
          {pokemonList.length && <Cards />}
        </>
      )}
      {!isLoading && isError && !isFetched && (
        <Error>
          <BadSearchRequestError />
        </Error>
      )}
      {!isLoading && !isError && isFetched && <Cards />}
    </Box>
  );
};

export default Main;
