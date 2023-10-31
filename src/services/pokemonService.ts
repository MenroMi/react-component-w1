// types
import { IObjectWithURL } from '../types';
import { IPokemon } from '../types/pokemonTypes';

// interfaces
interface IPokemonsPage {
  count: number;
  next: string | null;
  previous: string | null;
  results: IObjectWithURL[];
}

class PokemonService {
  private apiBase = 'https://pokeapi.co/api/v2';

  private getResource = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
      const error: Error = {
        name: 'RequestError',
        message: response.statusText,
      };
      throw new Error(JSON.stringify(error));
    }

    return await response.json();
  };

  public getPokemons = async (offset = 0, limit = 8) => {
    try {
      const pokemonsPage: IPokemonsPage = await this.getResource(
        `${this.apiBase}/pokemon?offset=${offset}&limit=${limit}`
      );

      if (!pokemonsPage) {
        const error: Error = {
          name: 'ObjectError',
          message: 'pokemons page is empty.',
        };
        throw new Error(JSON.stringify(error));
      }

      const pokemonsFromPage: Response[] = await Promise.allSettled(
        pokemonsPage.results.map((pok) => fetch(pok.url))
      ).then((results) =>
        results.map((r) => (r.status === 'fulfilled' ? r.value : r.reason))
      );

      const pokemons: IPokemon[] = [];
      for (const res of pokemonsFromPage) pokemons.push(await res.json());

      return pokemons;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`${error.name} --- ${error.message}`);
        return error;
      }

      const err = JSON.parse(error as string);
      return err;
    }
  };

  public getPokemon = async (name: string) => {
    try {
      const pokemon: IPokemon = await this.getResource(
        `${this.apiBase}/pokemon/${name}`
      );

      return pokemon;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.name, error.message);
        return error;
      }

      const err = JSON.parse(error as string);
      return err;
    }
  };
}

export default PokemonService;
