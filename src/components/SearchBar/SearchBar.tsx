import { Component, Context } from 'react';
import { PokemonContext } from '../../provider/pokemonProvider';
import { Box } from '../shared';
import { LOCAL_STORAGE_TERM } from '../../constants';
import styles from './SearchBar.module.css';
import { IExtendedPokemonContext } from '../../types/contextTypes';

interface SearchBarState {
  term: string;
  error: boolean;
}

interface SearchBarProps {
  [x: string]: never;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      term: '',
      error: false,
    };
  }

  static contextType: Context<IExtendedPokemonContext> = PokemonContext;
  declare context: React.ContextType<typeof PokemonContext>;

  componentDidMount(): void {
    const { getPokemonList, getPokemon, localStorageHandler } = this.context;

    const isExistTerm = localStorageHandler();

    if (!isExistTerm) getPokemonList();

    if (isExistTerm) getPokemon(isExistTerm);
  }

  formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { getPokemon, getPokemonList, localStorageHandler } = this.context;
    const trimedTerm = this.state.term.trim().toLowerCase();

    if (!trimedTerm) {
      getPokemonList();
      return;
    }

    getPokemon(trimedTerm);
    localStorageHandler(trimedTerm);
    this.setState({ term: '' });
  };

  inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (/\d|\W/gi.test(target.value)) return;
    this.setState({ term: target.value });
  };

  errorBoundaryHandler = () => this.setState(() => ({ error: true }));

  render = (): React.ReactNode => {
    if (this.state.error) {
      throw new Error();
    }

    return (
      <form
        className={styles['pokemon-search']}
        onSubmit={this.formSubmitHandler}
      >
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
            onChange={this.inputChangeHandler}
            value={this.state.term}
          />
          <button type="submit">Search</button>
          <button
            type="button"
            className={styles['err-b']}
            onClick={this.errorBoundaryHandler}
          >
            Error
          </button>
        </Box>
      </form>
    );
  };
}

export default SearchBar;
