import { FC, useReducer, useState } from 'react';
import PokemonService from '../services';
import { LOCAL_STORAGE_TERM } from '../constants';
import PokemonContext from './contex';
import { IPokemon } from '../types/pokemonTypes';
import { initialObjectReducer, reducer } from './contextReducer';

export interface IContextProps {
  children: React.ReactNode;
}

const PokemonProvider: FC<IContextProps> = ({ children }) => {
  const [{ error, isError, isFetched, isLoading }, dispatch] = useReducer(
    reducer,
    initialObjectReducer
  );
  const [searchPokemon, setSearchPokemon] = useState<string>('');
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const pokemonService = new PokemonService();

  const onLoading = () => dispatch({ type: 'loading' });
  const onLoaded = () => dispatch({ type: 'fetched' });
  const onError = (error: Error) => dispatch({ type: 'error', payload: error });

  const localStorageHandler = (newTerm?: string): string | null | void => {
    const prevTerm = localStorage.getItem(LOCAL_STORAGE_TERM);

    if (!prevTerm && !newTerm) return null;

    if (!prevTerm && newTerm) {
      setSearchPokemon(newTerm);
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

  const getPokemonList = async () => {
    onLoading();
    const pokemons = await pokemonService.getPokemons();
    if (pokemons instanceof Error) {
      onError(pokemons);
      return;
    }

    localStorage.removeItem(LOCAL_STORAGE_TERM);
    setPokemonList(pokemons);
    onLoaded();
  };

  const getPokemon = async (name: string) => {
    onLoading();
    const pokemon = await pokemonService.getPokemon(name);

    if (pokemon instanceof Error) {
      onError(pokemon);
      return;
    }

    setPokemonList([pokemon]);
    onLoaded();
  };

  return (
    <PokemonContext.Provider
      value={{
        getPokemonList,
        getPokemon,
        localStorageHandler,
        searchPokemon,
        pokemonList,
        isError,
        isFetched,
        isLoading,
        error,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
