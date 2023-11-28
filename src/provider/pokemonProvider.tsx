import { FC, useContext, useEffect, useState } from 'react';
import PokemonContext from './contex';
import onHandleLocalStorage from '../helpers/onHandleLocalStorage';
import useStatesQuery from '../hooks/useStatesQuery';
import usePagination from '../hooks/usePagination';
import { IPokemon } from '../types/pokemonTypes';
import { LOCAL_STORAGE_TERM, urlParams } from '../constants';
import pokemonService from '../services/pokemonService';
import { IResponseObject } from '../types/contextTypes';
import onChangeURLParams from '../helpers/onChangeURLParams';

export interface IContextProps {
  children: React.ReactNode;
}

const PokemonProvider: FC<IContextProps> = ({ children }) => {
  const { error, isError, isFetched, isLoading, onError, onLoaded, onLoading } =
    useStatesQuery();
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);
  const {
    limit,
    offset,
    nextPage,
    prevPage,
    actualPage,
    totalCountPages,
    onSetTotalPages,
    onChangeActualPage,
    onChangeLimitOnPage,
    onDecrementActualPage,
    onIncrementActualPage,
  } = usePagination();

  useEffect(() => {
    const isExistTerm = onHandleLocalStorage();

    if (isExistTerm) {
      getPokemon(isExistTerm);
    }
    if (!isExistTerm) {
      getPokemonList(offset, limit);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualPage, limit]);

  const getPokemonList = async (offset = 0, limit = 9) => {
    onLoading();
    const response: IResponseObject = await pokemonService.getPokemons(
      offset,
      limit
    );

    if (response instanceof Error) {
      onError(response);
      return;
    }

    localStorage.removeItem(LOCAL_STORAGE_TERM);
    setPokemonList(response.pokemons);
    onSetTotalPages(Math.ceil(response.total / limit));
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
    onSetTotalPages(Math.ceil([pokemon].length / limit));
    onLoaded();
  };

  const onSetChosenPokemon = (p: IPokemon | null) => {
    if (!p) {
      urlParams.details = 0;
      setPokemon(null);
      onChangeURLParams(urlParams);
      return;
    }

    urlParams.details = p.id;
    setPokemon(p);
    onChangeURLParams(urlParams);
  };

  return (
    <PokemonContext.Provider
      value={{
        limit,
        error,
        offset,
        pokemon,
        isError,
        nextPage,
        prevPage,
        isLoading,
        isFetched,
        actualPage,
        pokemonList,
        totalCountPages,
        onError,
        onLoaded,
        onLoading,
        getPokemon,
        getPokemonList,
        onChangeActualPage,
        onSetChosenPokemon,
        onChangeLimitOnPage,
        onHandleLocalStorage,
        onDecrementActualPage,
        onIncrementActualPage,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;

export const usePokemonsContext = () => useContext(PokemonContext);
