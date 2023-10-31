// basic
import { Component } from 'react';

// components
import { Box } from '../shared';

// styles
import styles from './Header.module.css';
import SearchBar from '../SearchBar';

// interfaces
interface HeaderState {
  [x: string]: never;
}

interface HeaderProps {
  [x: string]: never;
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render = (): React.ReactNode => {
    return (
      <Box className={styles['header-box']}>
        <SearchBar />
      </Box>
    );
  };
}

export default Header;
