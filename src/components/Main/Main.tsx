import { Component, Context } from 'react';
import { PokemonContext } from '../../provider/pokemonProvider';
import { Box } from '../shared';
import Cards from '../Cards';
import Loader from '../Loader';
import { BadSearchRequestError, Error } from '../Errors';
import styles from './Main.module.css';
import { IExtendedPokemonContext } from '../../types/contextTypes';

interface MainState {
  [x: string]: never;
}

interface MainProps {
  [x: string]: never;
}

class Main extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
  }

  static contextType: Context<IExtendedPokemonContext> = PokemonContext;
  declare context: React.ContextType<typeof PokemonContext>;

  render = (): React.ReactNode => {
    const { isError, isFetched, isLoading, pokemonList } = this.context;
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
}

export default Main;
