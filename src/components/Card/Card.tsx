import { FC } from 'react';
import { Box } from '../shared';
import styles from './Card.module.css';
import { IAbility, IStats, IType } from '../../types/pokemonTypes';

interface ICardProps {
  id: number;
  name: string;
  abilities: IAbility[];
  types: IType[];
  stats: IStats[];
}

const Card: FC<ICardProps> = ({ abilities, id, name, stats, types }) => {
  const onIterateFields = (
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

  const pokemonFieldName = ['ability', 'stat', 'type'];
  const pokemonFieldValues = [abilities, stats, types];

  return (
    <Box className={styles.card}>
      <p className={styles['card__id']}>{id}</p>
      <p className={styles['card__name']}>{name}</p>

      <ul className={styles['card__info']}>
        {onIterateFields(pokemonFieldValues, pokemonFieldName)}
      </ul>
    </Box>
  );
};

export default Card;
