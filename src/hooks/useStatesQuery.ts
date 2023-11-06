import { useReducer } from 'react';
import { IStateAPIActions, IStateAPIStates } from '../types/contextTypes';

const initialObjectReducer = {
  isLoading: false,
  isFetched: false,
  isError: false,
  error: {
    name: '',
    message: '',
  },
};

const reducer = (state: IStateAPIStates, action: IStateAPIActions) => {
  switch (action.type) {
    case 'loading':
      return { ...initialObjectReducer, isLoading: true } as IStateAPIStates;
    case 'fetched':
      return { ...initialObjectReducer, isFetched: true } as IStateAPIStates;
    case 'error':
      return {
        ...initialObjectReducer,
        isError: true,
        error: action.payload,
      } as IStateAPIStates;
    default:
      return state;
  }
};

const useStatesQuery = () => {
  const [{ isError, isFetched, error, isLoading }, dispatch] = useReducer(
    reducer,
    initialObjectReducer
  );

  const onLoading = () => dispatch({ type: 'loading' });
  const onLoaded = () => dispatch({ type: 'fetched' });
  const onError = (error: Error) => dispatch({ type: 'error', payload: error });

  return { isError, isFetched, isLoading, error, onError, onLoaded, onLoading };
};

export default useStatesQuery;
