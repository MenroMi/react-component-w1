import styles from './DetailsStatsTable.module.css';

interface IDetailsStatsTableProps {
  statTitles: string[];
  statNames: string[];
  statBases: number[];
  statEfforts: number[];
}

const DetailsStatsTable = ({
  statBases,
  statEfforts,
  statNames,
  statTitles,
}: IDetailsStatsTableProps) => {
  return (
    <table className={styles['stat-table']}>
      <thead>
        <tr>
          <th>{statTitles[0]}</th>
          <th>{statTitles[1]}</th>
          <th>{statTitles[2]}</th>
        </tr>
      </thead>

      <tbody>
        {statNames.map((name, id) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{statBases[id] ?? 0}</td>
            <td>{statEfforts[id] ?? 0}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetailsStatsTable;
