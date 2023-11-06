import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from 'react';
import { Box } from '../shared';

import styles from './PagesCounter.module.css';
import onChangeURLParams from '../../helpers/onChangeURLParams';
import { urlParams } from '../../constants';

interface IPagesCounterProps {
  totalCountPages: number;
  actualPage: number;
  prevPage: number;
  nextPage: number;
  onChangeActualPage: (page: number) => void;
}

const PagesCounter: FC<IPagesCounterProps> = ({
  totalCountPages,
  actualPage,
  nextPage,
  prevPage,
  onChangeActualPage,
}) => {
  const [term, setTerm] = useState<number>(actualPage);

  useEffect(() => {
    setTerm(actualPage);
  }, [actualPage]);

  const handleKeyDownEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const clickedKeydown = e.code;
    const target = e.target as HTMLInputElement;
    const page = +target.value;

    if (clickedKeydown === 'Enter' && page) {
      const isMoreThanTotalPages =
        page >= totalCountPages ? totalCountPages : page;
      const calculatedPage = page === 0 ? 1 : isMoreThanTotalPages;
      urlParams.page = calculatedPage;

      setTerm(calculatedPage);
      onChangeActualPage(calculatedPage);
      onChangeURLParams(urlParams);
      target.blur();
      return;
    }
  };

  const hangleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.replace(/\D/gi, '');

    setTerm(+value);
  };

  return (
    <Box className={styles.pages}>
      <Box>{prevPage <= 0 ? '' : prevPage}</Box>
      <input
        value={term}
        onKeyDown={handleKeyDownEnter}
        onChange={hangleChangeInput}
      />
      <Box>{actualPage === totalCountPages ? '' : nextPage}</Box>
    </Box>
  );
};

export default PagesCounter;
