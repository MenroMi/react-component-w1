// basic
import { Component } from 'react';

// components
import { Box } from '../../shared';
import { SadFaceIcon } from '../../Icons';

// constants
import { LINK_TO_PAGE, LOCAL_STORAGE_TERM } from '../../../constants';

// styles
import styles from './Error.module.css';

// interfaces
interface IErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface IErrorStates {
  [x: string]: never;
}

class Error extends Component<IErrorProps, IErrorStates> {
  constructor(props: IErrorProps) {
    super(props);
  }

  onReloadPage = () => {
    const isExist = localStorage.getItem(LOCAL_STORAGE_TERM);

    if (isExist) {
      localStorage.removeItem(LOCAL_STORAGE_TERM);
    }
  };

  render = (): React.ReactNode => {
    const { children } = this.props;

    return (
      <Box className={styles.error}>
        <SadFaceIcon />
        {children}
        <a
          href={LINK_TO_PAGE}
          className={styles['error__btn']}
          onClick={this.onReloadPage}
        >
          Reload Page
        </a>
      </Box>
    );
  };
}

export default Error;
