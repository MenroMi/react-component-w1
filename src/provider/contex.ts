import { createContext } from 'react';
import {
  IPaginationStates,
  IPokemonContext,
  IStateAPIStates,
} from '../types/contextTypes';

const paginationStates: IPaginationStates = {
  limit: 0,
  offset: 0,
  totalCountPages: 0,
  actualPage: 0,
  nextPage: 0,
  prevPage: 0,
  onChangeActualPage: () => {},
  onDecrementActualPage: () => {},
  onIncrementActualPage: () => {},
  onChangeLimitOnPage: () => {},
};

const queryStates: IStateAPIStates = {
  isLoading: false,
  isFetched: false,
  isError: false,
  error: {
    name: '',
    message: '',
  },
};

const PokemonContext = createContext<IPokemonContext>({
  onSetChosenPokemon: () => {},
  getPokemonList: () => new Promise(() => {}),
  getPokemon: () => new Promise(() => {}),
  onHandleLocalStorage: () => {},
  onLoaded: () => {},
  onError: () => {},
  onLoading: () => {},
  pokemonList: [],
  pokemon: null,
  ...queryStates,
  ...paginationStates,
});

export default PokemonContext;
