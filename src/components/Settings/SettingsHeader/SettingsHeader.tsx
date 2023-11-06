import { ArrowFilterIcon } from '../../Icons';
import styles from './SettingsHeader.module.css';

interface ISettingsHeaderProps {
  isOpen: boolean;
  handleOpenState: () => void;
}

const SettingsHeader = ({ isOpen, handleOpenState }: ISettingsHeaderProps) => {
  return (
    <header
      className={`${styles['settings__header']}`}
      onClick={handleOpenState}
    >
      <p>Settings:</p>
      <ArrowFilterIcon isOpen={isOpen} />
    </header>
  );
};

export default SettingsHeader;
