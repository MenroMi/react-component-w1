import styles from './RenderError.module.css';

const RenderError = () => {
  return (
    <p className={styles.content}>
      Sorry, but now we cannot to render application for you. Please try again
      later.
    </p>
  );
};

export default RenderError;
