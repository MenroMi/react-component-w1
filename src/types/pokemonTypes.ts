import { IObjectWithURL } from './index';

export interface IGameIndice {
  game_index: number;
  version: IObjectWithURL;
}

export interface IAbility {
  ability: IObjectWithURL;
  slot: number;
}

export interface IStats {
  base_stat: number;
  effort: number;
  stat: IObjectWithURL;
}

export interface IType {
  type: IObjectWithURL;
  slot: number;
}

export interface ISprites {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string;
}

export interface IMove {
  name: string;
  url: string;
}

export interface IMove {
  move: IMove;
}

export interface IPokemon {
  abilities: IAbility[];
  base_experience: number;
  forms: IObjectWithURL[];
  game_indices: IGameIndice[];
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  stats: IStats[];
  types: IType[];
  weight: number;
  sprites: ISprites;
  moves: IMove[];
}
