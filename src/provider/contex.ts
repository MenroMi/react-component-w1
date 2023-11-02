import { createContext } from 'react';
import { IPokemonContext } from '../types/contextTypes';

const PokemonContext = createContext<IPokemonContext>({
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

export default PokemonContext;
