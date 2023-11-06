import { IInitialData, IUrlParams } from '../types';

export const LOCAL_STORAGE_TERM = 'prev-search-term';

export const UNKNOWN = 'unknown';

export const HOMEPAGE_URL = 'https://menromi.github.io/rsschool-menromi-2023/';

export const initialData: IInitialData = {
  actualPage: 1,
  nextPage: 2,
  prevPage: 0,
  offset: 0,
  limit: 9,
  totalCountPages: 0,
};

export const urlParams: IUrlParams = { page: 0, details: 0 };
