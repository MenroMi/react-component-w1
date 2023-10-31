// basic
import { Component } from 'react';

// components
import { Box } from '../shared';

// styles
import styles from './Card.module.css';

// types
import { IAbility, IStats, IType } from '../../types/pokemonTypes';

// interfaces
interface CardState {
  [x: string]: never;
}

interface CardProps {
  id: number;
  name: string;
  abilities: IAbility[];
  types: IType[];
  stats: IStats[];
}

class Card extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
  }

  public onIterateFields = (
    fields: (IAbility[] | IType[] | IStats[])[],
    names: string[]
  ): JSX.Element[] => {
    return fields.map((field, i) => {
      return (
        <li key={i}>
          <span>{names[i]}</span>:{' '}
          {field.map((fieldValue, i) => {
            let actualValue: string;

            if ('ability' in fieldValue) {
              actualValue = fieldValue['ability'].name;
            } else if ('stat' in fieldValue) {
              actualValue = fieldValue['stat'].name;
            } else {
              actualValue = fieldValue['type'].name;
            }

            return i + 1 === field.length
              ? `${actualValue}`
              : `${actualValue}, `;
          })}
        </li>
      );
    });
  };

  render = (): React.ReactNode => {
    const { abilities, id, name, stats, types } = this.props;

    const pokemonFieldName = ['ability', 'stat', 'type'];
    const pokemonFieldValues = [abilities, stats, types];

    return (
      <Box className={styles.card}>
        <p className={styles['card__id']}>{id}</p>
        <p className={styles['card__name']}>{name}</p>

        <ul className={styles['card__info']}>
          {this.onIterateFields(pokemonFieldValues, pokemonFieldName)}
        </ul>
      </Box>
    );
  };
}

export default Card;
