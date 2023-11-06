import { Box } from '../../shared';
import styles from './SettingsMain.module.css';

interface ISettingsMainProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const SettingsMain = ({ isOpen, children }: ISettingsMainProps) => {
  return (
    <Box
      className={`${styles['setttings__container']} ${
        !isOpen && styles.closed
      }`}
    >
      {children}
    </Box>
  );
};

export default SettingsMain;
