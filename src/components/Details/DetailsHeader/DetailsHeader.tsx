import { ISprites } from '../../../types/pokemonTypes';

import styles from './DetailsHeader.module.css';

interface IDetailsHeaderProps {
  name: string;
  sprites: ISprites;
}

const DetailsHeader = ({ name, sprites }: IDetailsHeaderProps) => {
  return (
    <header className={styles['details__header']}>
      <h2>{name}</h2>
      <img
        src={sprites.front_default ?? 'no-image.png'}
        alt={`${name}'s image`}
      />
    </header>
  );
};

export default DetailsHeader;
