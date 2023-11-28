import { useState } from 'react';
import { Box, Button, Input } from '../shared';
import { LOCAL_STORAGE_TERM } from '../../constants';
import styles from './SearchBar.module.css';
import onHandleLocalStorage from '../../helpers/onHandleLocalStorage';
import { usePokemonsContext } from '../../provider/pokemonProvider';

const SearchBar = () => {
  const [term, setTerm] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const {
    getPokemonList,
    getPokemon,
    onChangeActualPage,
    onSetChosenPokemon,
    offset,
  } = usePokemonsContext();

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const trimedTerm = term.trim().toLowerCase();
    onSetChosenPokemon(null);

    if (!trimedTerm) {
      if (offset !== 0 || localStorage.getItem(LOCAL_STORAGE_TERM)) {
        getPokemonList();
        onChangeActualPage(1);
      }

      return;
    }

    getPokemon(trimedTerm);
    onHandleLocalStorage(trimedTerm);
    setTerm('');
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (/\d|\W/gi.test(target.value)) return;
    setTerm(target.value);
  };

  const errorBoundaryHandler = () => setIsError(true);

  if (isError) throw new Error();

  return (
    <form className={styles['pokemon-search']} onSubmit={formSubmitHandler}>
      <label htmlFor="term" className={styles['pokemon-search__label']}>
        Search bar:
      </label>
      <Box className={styles['pokemon-search__input']}>
        <Input
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
        <Button className="btn-elem" type="submit">
          Search
        </Button>
        <Button
          type="button"
          className={styles['err-b']}
          onClick={errorBoundaryHandler}
        >
          Error
        </Button>
      </Box>
    </form>
  );
};

export default SearchBar;
