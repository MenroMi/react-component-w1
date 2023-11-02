import { Box, Overlay } from '../shared';
import { GearLoaderIcon } from '../Icons';
import styles from './Loader.module.css';

interface ILoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  [x: string]: unknown;
}

const Loader = (props: ILoaderProps) => {
  return (
    <Box className={styles.loader} {...props}>
      <Overlay>
        <GearLoaderIcon />
      </Overlay>
    </Box>
  );
};

export default Loader;
