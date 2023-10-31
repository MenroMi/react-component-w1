import { Component } from 'react';
import styles from './RenderError.module.css';

interface IRenderErrorProps {
  [x: string]: never;
}

interface IRenderErrorStates {
  [x: string]: never;
}

class RenderError extends Component<IRenderErrorProps, IRenderErrorStates> {
  constructor(props: IRenderErrorProps) {
    super(props);
  }

  render = (): React.ReactNode => {
    return (
      <p className={styles.content}>
        Sorry, but now we cannot to render application for you. Please try again
        later.
      </p>
    );
  };
}

export default RenderError;
