import styles from './BadSearchRequestError.module.css';

const BadSearchRequestError = () => {
  return (
    <p className={styles.content}>
      Please, check input with written data, because the pokemon what are you
      looking for is not existing.
    </p>
  );
};

export default BadSearchRequestError;
