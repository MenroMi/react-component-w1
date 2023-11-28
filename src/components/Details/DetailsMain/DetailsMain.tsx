import { UNKNOWN } from '../../../constants';
import { IPokemon } from '../../../types/pokemonTypes';
import { Button, Section } from '../../shared';
import styles from './DetailsMain.module.css';

interface IDetailsMainProps {
  pokemon: IPokemon;
  table: React.ReactNode;
}

const DetailsMain = ({ pokemon, table }: IDetailsMainProps) => {
  const { id, height, weight, base_experience, types, abilities, moves } =
    pokemon;

  const onIterateBasicInfo = () => {
    const basicInfo: React.ReactNode[] = [];
    const infoData = { id, height, weight, base_experience, types, abilities };

    console.log(infoData);
    for (const title in infoData) {
      if (title === 'types') {
        basicInfo.push(
          <li key={title}>
            <span>Types:</span>{' '}
            {infoData[title].map(({ type, slot }) => (
              <span key={slot}>{type.name} </span>
            ))}
          </li>
        );
        continue;
      }

      if (title === 'abilities') {
        basicInfo.push(
          <li key={title}>
            <span>Abilities:</span>{' '}
            {infoData[title].map(({ ability }) => (
              <span key={ability.name}>{ability.name} </span>
            ))}
          </li>
        );
        continue;
      }

      const value = infoData[title as keyof typeof infoData];

      basicInfo.push(
        <li key={title}>
          <span>{title}</span>: {value ? value.toString() : UNKNOWN}
        </li>
      );
    }
    return basicInfo;
  };

  return (
    <main id={styles.main}>
      <Section id="basic-info">
        <h3>Basic:</h3>
        <ol className={styles['basic-info-list']}>
          {onIterateBasicInfo()?.map((property) => property)}
        </ol>
      </Section>

      <Section id="stats">
        <h3>Stats:</h3>

        {table}
      </Section>

      <Section id="moves" className={styles.moves}>
        <h3>Moves:</h3>

        <ol className={styles['moves__list']}>
          {moves.map(({ move }, id) =>
            id < 3 ? <li key={move.name}>{move.name}</li> : null
          )}
        </ol>

        <Button className={styles['moves__see-more']}>SEE MORE</Button>
      </Section>
    </main>
  );
};

export default DetailsMain;
