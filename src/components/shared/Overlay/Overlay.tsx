import Box from '../Box';
import styles from './Overlay.module.css';

interface IOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Overlay = ({ children, ...rest }: IOverlayProps) => {
  return (
    <Box className={styles.overlay} {...rest}>
      {children}
    </Box>
  );
};

export default Overlay;
