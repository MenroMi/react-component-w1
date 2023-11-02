import { FC } from 'react';
import { Box } from '../../shared';
import { SadFaceIcon } from '../../Icons';
import { HOMEPAGE_URL, LOCAL_STORAGE_TERM } from '../../../constants';
import styles from './Error.module.css';

interface IErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Error: FC<IErrorProps> = ({ children }) => {
  const onReloadPage = () => {
    const isExist = localStorage.getItem(LOCAL_STORAGE_TERM);

    if (isExist) {
      localStorage.removeItem(LOCAL_STORAGE_TERM);
    }
  };

  return (
    <Box className={styles.error}>
      <SadFaceIcon />
      {children}
      <a
        href={HOMEPAGE_URL}
        className={styles['error__btn']}
        onClick={onReloadPage}
      >
        Reload Page
      </a>
    </Box>
  );
};

export default Error;
