import { IPokemon } from './pokemonTypes';

export interface IStateAPIStates {
  isLoading: boolean;
  isFetched: boolean;
  isError: boolean;
  error: Error;
}

export interface IPokemonContext extends IStateAPIStates {
  searchPokemon: string;
  pokemonList: IPokemon[];
  getPokemonList: () => Promise<void>;
  getPokemon: (name: string) => Promise<void>;
  localStorageHandler: (newTerm?: string) => string | null | void;
}

export interface IErrorStateAPIReducer {
  name: string;
  message: string;
}

export interface IStateAPIActions {
  type: string;
  payload?: unknown;
}
