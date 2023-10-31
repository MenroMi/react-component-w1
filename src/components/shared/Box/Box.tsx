// basic
import { Component } from 'react';

// styles
import styles from './Box.module.css';

// interfaces
interface BoxState {
  [x: string]: never;
}

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

class Box extends Component<BoxProps, BoxState> {
  render = () => {
    const { className, ...rest } = this.props;
    return (
      <div className={styles.box + ` ${className}`} {...rest}>
        {this.props.children}
      </div>
    );
  };
}

export default Box;
