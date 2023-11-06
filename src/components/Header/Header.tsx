import { Box } from '../shared';
import styles from './Header.module.css';
import SearchBar from '../SearchBar';

const Header = () => {
  return (
    <Box className={`container ${styles['header-box']}`}>
      <SearchBar />
    </Box>
  );
};

export default Header;
