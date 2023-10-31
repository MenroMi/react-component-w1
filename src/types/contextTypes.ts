import { IPokemon } from './pokemonTypes';

export interface ContextState {
  searchPokemon: string;
  pokemonList: IPokemon[];
  isLoading: boolean;
  isFetched: boolean;
  isError: boolean;
  error: Error;
}

export interface ContextProps {
  children: React.ReactNode;
}

export type IPokemonContext = {
  [K in keyof ContextState]: ContextState[K];
};

export interface IExtendedPokemonContext extends IPokemonContext {
  getPokemonList: () => Promise<void>;
  getPokemon: (name: string) => Promise<void>;
  localStorageHandler: (newTerm?: string) => string | null | void;
}
