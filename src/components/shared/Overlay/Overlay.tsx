// basic
import { Component } from 'react';

// components
import Box from '../Box';

// styles
import styles from './Overlay.module.css';

// interfaces
interface IOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface IOverlayStates {
  [x: string]: never;
}

class Overlay extends Component<IOverlayProps, IOverlayStates> {
  constructor(props: IOverlayProps) {
    super(props);
  }

  render = (): React.ReactNode => {
    const { children, ...rest } = this.props;

    return (
      <Box className={styles.overlay} {...rest}>
        {children}
      </Box>
    );
  };
}

export default Overlay;
