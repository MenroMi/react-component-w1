import { Box, Button } from '../shared';
import styles from './Pagination.module.css';
import PagesCounter from '../PagesCounter';
import { usePokemonsContext } from '../../provider/pokemonProvider';

const Pagination = () => {
  const {
    onChangeActualPage,
    onDecrementActualPage,
    onIncrementActualPage,
    totalCountPages,
    prevPage,
    actualPage,
    nextPage,
    isError,
  } = usePokemonsContext();

  return (
    <Box
      className={`container ${styles['pagination-container']} ${
        (isError || totalCountPages <= 1) && styles.disabled
      }`}
    >
      <Box className={styles.pagination}>
        <Button
          className={`btn-elem ${styles['pagination__btn']}`}
          onClick={onDecrementActualPage}
          disabled={prevPage === 0}
        >
          Prev
        </Button>

        <PagesCounter
          totalCountPages={totalCountPages}
          actualPage={actualPage}
          prevPage={prevPage}
          nextPage={nextPage}
          onChangeActualPage={onChangeActualPage}
        />

        <Button
          className={`btn-elem ${styles['pagination__btn']}`}
          onClick={onIncrementActualPage}
          disabled={actualPage === totalCountPages}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Pagination;
