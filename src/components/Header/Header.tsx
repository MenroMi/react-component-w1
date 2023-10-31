import { Component } from 'react';
import { Box } from '../shared';
import styles from './Header.module.css';
import SearchBar from '../SearchBar';

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
