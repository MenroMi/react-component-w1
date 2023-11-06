import { useState } from 'react';
import PageSize from '../PageSize';
import styles from './PageSettings.module.css';
import { Box } from '../../shared';
import SettingsHeader from '../SettingsHeader';
import SettingsMain from '../SettingsMain';

const PageSettings = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenState = () => setIsOpen((prev) => !prev);

  return (
    <Box className={`container ${styles['settings']}`}>
      <SettingsHeader isOpen={isOpen} handleOpenState={handleOpenState} />

      <SettingsMain isOpen={isOpen}>
        <Box className={styles['size']}>
          <PageSize />
        </Box>
      </SettingsMain>
    </Box>
  );
};

export default PageSettings;
