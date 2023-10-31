import { Component, ReactNode } from 'react';
import styles from './BadSearchRequestError.module.css';

interface IBadSearchRequestErrorProps {
  [x: string]: never;
}

interface IBadSearchRequestErrorStates {
  [x: string]: never;
}

class BadSearchRequestError extends Component<
  IBadSearchRequestErrorProps,
  IBadSearchRequestErrorStates
> {
  constructor(props: IBadSearchRequestErrorProps) {
    super(props);
  }

  render = (): ReactNode => {
    return (
      <p className={styles.content}>
        Please, check input with written data, because the pokemon what are you
        looking for is not existing.
      </p>
    );
  };
}

export default BadSearchRequestError;
