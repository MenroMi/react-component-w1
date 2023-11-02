import { useContext, useEffect, useState } from 'react';
import { Box } from '../shared';
import { LOCAL_STORAGE_TERM } from '../../constants';
import styles from './SearchBar.module.css';
import PokemonContext from '../../provider/contex';

const SearchBar = () => {
  const [term, setTerm] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const { getPokemon, getPokemonList, localStorageHandler } =
    useContext(PokemonContext);

  useEffect(() => {
    const isExistTerm = localStorageHandler();

    if (isExistTerm) {
      getPokemon(isExistTerm);
    } else {
      getPokemonList();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimedTerm = term.trim().toLowerCase();

    if (!trimedTerm) {
      getPokemonList();
      return;
    }

    getPokemon(trimedTerm);
    localStorageHandler(trimedTerm);
    setTerm('');
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (/\d|\W/gi.test(target.value)) return;
    setTerm(target.value);
  };

  const errorBoundaryHandler = () => setIsError(true);

  if (isError) {
    throw new Error();
  }

  return (
    <form className={styles['pokemon-search']} onSubmit={formSubmitHandler}>
      <label htmlFor="term" className={styles['pokemon-search__label']}>
        Search bar:
      </label>
      <Box className={styles['pokemon-search__input']}>
        <input
          id="term"
          type="text"
          placeholder={
            (localStorage.getItem(LOCAL_STORAGE_TERM) &&
              `The last wanted pokemon: ${localStorage.getItem(
                LOCAL_STORAGE_TERM
              )}`) ||
            'Write your pokemon...'
          }
          onChange={inputChangeHandler}
          value={term}
        />
        <button type="submit">Search</button>
        <button
          type="button"
          className={styles['err-b']}
          onClick={errorBoundaryHandler}
        >
          Error
        </button>
      </Box>
    </form>
  );
};

export default SearchBar;
