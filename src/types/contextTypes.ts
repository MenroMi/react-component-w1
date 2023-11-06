import { IPokemon } from './pokemonTypes';

export interface IStateAPIStates {
  isLoading: boolean;
  isFetched: boolean;
  isError: boolean;
  error: Error;
}

export interface IPaginationStates {
  limit: number;
  offset: number;
  totalCountPages: number;
  actualPage: number;
  nextPage: number;
  prevPage: number;
  onChangeActualPage: (page: number) => void;
  onDecrementActualPage: () => void;
  onIncrementActualPage: () => void;
  onChangeLimitOnPage: (limit: number) => void;
}

export interface IPokemonContext extends IStateAPIStates, IPaginationStates {
  pokemon: IPokemon | null;
  pokemonList: IPokemon[];
  onSetChosenPokemon: (p: IPokemon | null) => void;
  getPokemonList: () => Promise<void>;
  getPokemon: (name: string) => Promise<void>;
  onHandleLocalStorage: (newTerm?: string) => string | null | void;
  onLoaded: () => void;
  onError: (error: Error) => void;
  onLoading: () => void;
}

export interface IErrorStateAPIReducer {
  name: string;
  message: string;
}

export interface IStateAPIActions {
  type: string;
  payload?: unknown;
}

export interface IResponseObject {
  total: number;
  pokemons: IPokemon[];
}
