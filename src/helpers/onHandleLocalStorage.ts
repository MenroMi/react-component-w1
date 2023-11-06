import { LOCAL_STORAGE_TERM } from '../constants';

const onHandleLocalStorage = (newTerm?: string): string | null | void => {
  const prevTerm = localStorage.getItem(LOCAL_STORAGE_TERM);

  if (!prevTerm && !newTerm) return;

  if (!prevTerm && newTerm) {
    localStorage.setItem(LOCAL_STORAGE_TERM, newTerm);
    return newTerm;
  }

  if (prevTerm && newTerm) {
    localStorage.removeItem(prevTerm);
    localStorage.setItem(LOCAL_STORAGE_TERM, newTerm);
    return;
  }

  return prevTerm;
};

export default onHandleLocalStorage;
