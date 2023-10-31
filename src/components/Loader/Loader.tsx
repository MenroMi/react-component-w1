import { Component } from 'react';
import { Box, Overlay } from '../shared';
import { GearLoaderIcon } from '../Icons';
import styles from './Loader.module.css';

interface ILoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  [x: string]: unknown;
}

interface ILoaderStates {
  [x: string]: never;
}

class Loader extends Component<ILoaderProps, ILoaderStates> {
  constructor(props: ILoaderProps) {
    super(props);
  }

  render = (): React.ReactNode => {
    return (
      <Box className={styles.loader} {...this.props}>
        <Overlay>
          <GearLoaderIcon />
        </Overlay>
      </Box>
    );
  };
}

export default Loader;
