import { useState } from 'react';
import { Box, Button, Input } from '../../shared';
import styles from './PageSize.module.css';
import { usePokemonsContext } from '../../../provider/pokemonProvider';

const PageSize = () => {
  const { onChangeLimitOnPage } = usePokemonsContext();
  const [size, setSize] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmitInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const target = e.target as HTMLFormElement;

    if (size && +size <= 20) {
      onChangeLimitOnPage(+size);
    }

    target.blur();
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    const isNotANumber = /\D/.test(value);

    if (isNotANumber || (value && (+value > 20 || +value < 9))) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    setSize(target.value);
  };

  return (
    <form onSubmit={handleSubmitInput} className={styles['limit']}>
      <label htmlFor="limit">page size:</label>
      <Box className={styles['limit__container']}>
        <Input
          id="limit"
          type="text"
          placeholder="Max. 20"
          value={size}
          required
          onChange={handleChangeInput}
          className={isError ? styles.error : ''}
        />
        <Button className="btn-elem" type="submit" disabled={isError}>
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default PageSize;
