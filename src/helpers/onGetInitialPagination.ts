import { urlParams } from '../constants';
import { IInitialData } from '../types';
import onChangeURLParams from './onChangeURLParams';
import onTakeURLParams from './onTakeURLParams';

const onGetInitialPagination = (data: IInitialData) => {
  const page = Number(onTakeURLParams('page'));
  const initData = { ...data };

  if (page && page >= initData.totalCountPages) {
    initData.actualPage = initData.totalCountPages;
    initData.prevPage = initData.totalCountPages - 1;
    initData.offset = (initData.totalCountPages - 1) * data.limit;

    urlParams.page = initData.totalCountPages;
    onChangeURLParams(urlParams);
  }

  if (page && page < initData.totalCountPages) {
    initData.actualPage = page;
    initData.prevPage = page - 1;
    initData.nextPage = page + 1;
    initData.offset = (page - 1) * data.limit;

    urlParams.page = page;
    onChangeURLParams(urlParams);
  }

  if (!page) {
    urlParams.page = 1;
    onChangeURLParams(urlParams);
  }

  return initData;
};

export default onGetInitialPagination;
