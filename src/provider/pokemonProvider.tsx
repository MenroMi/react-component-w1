import { Component, createContext } from 'react';
import PokemonService from '../services';
import {
  ContextProps,
  ContextState,
  IExtendedPokemonContext,
} from '../types/contextTypes';
import { LOCAL_STORAGE_TERM } from '../constants';

export const PokemonContext = createContext<IExtendedPokemonContext>({
  getPokemonList: () => new Promise(() => {}),
  getPokemon: () => new Promise(() => {}),
  localStorageHandler: () => {},
  searchPokemon: '',
  pokemonList: [],
  isLoading: false,
  isFetched: false,
  isError: false,
  error: {
    name: '',
    message: '',
  },
});

class PokemonProvider extends Component<ContextProps, ContextState> {
  constructor(props: ContextProps) {
    super(props);

    this.state = {
      searchPokemon: '',
      pokemonList: [],
      isLoading: false,
      isFetched: false,
      isError: false,
      error: {
        name: '',
        message: '',
      },
    };
  }

  pokemonService = new PokemonService();

  localStorageHandler = (newTerm?: string): string | null | void => {
    const prevTerm = localStorage.getItem(LOCAL_STORAGE_TERM);

    if (!prevTerm && !newTerm) return null;

    if (!prevTerm && newTerm) {
      this.setState({ searchPokemon: newTerm });
      localStorage.setItem(LOCAL_STORAGE_TERM, newTerm);
      return;
    }

    if (prevTerm && newTerm) {
      localStorage.removeItem(prevTerm);
      localStorage.setItem(LOCAL_STORAGE_TERM, newTerm);
      return;
    }

    return prevTerm;
  };

  onLoading = () =>
    this.setState(() => ({
      isLoading: true,
      isError: false,
      isFetched: false,
      error: { name: '', message: '' },
    }));

  onLoaded = () =>
    this.setState(() => ({
      isLoading: false,
      isError: false,
      isFetched: true,
    }));

  onError = (error: Error) =>
    this.setState({
      isLoading: false,
      isError: true,
      isFetched: false,
      error,
    });

  getPokemonList = async () => {
    this.onLoading();
    const pokemons = await this.pokemonService.getPokemons();
    if (pokemons instanceof Error) {
      this.onError(pokemons);
      return;
    }

    localStorage.removeItem(LOCAL_STORAGE_TERM);
    this.setState({ pokemonList: pokemons });
    this.onLoaded();
  };

  getPokemon = async (name: string) => {
    this.onLoading();
    const pokemon = await this.pokemonService.getPokemon(name);

    if (pokemon instanceof Error) {
      this.onError(pokemon);
      return;
    }

    this.setState({ pokemonList: [pokemon] });
    this.onLoaded();
  };

  render = (): React.ReactNode => {
    const { error, isError, isFetched, isLoading, pokemonList, searchPokemon } =
      this.state;
    return (
      <PokemonContext.Provider
        value={{
          getPokemonList: this.getPokemonList,
          getPokemon: this.getPokemon,
          localStorageHandler: this.localStorageHandler,
          searchPokemon,
          pokemonList,
          isError,
          isFetched,
          isLoading,
          error,
        }}
      >
        {this.props.children}
      </PokemonContext.Provider>
    );
  };
}

export default PokemonProvider;
