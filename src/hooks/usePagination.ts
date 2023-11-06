import { useEffect, useState } from 'react';
import onChangeURLParams from '../helpers/onChangeURLParams';
import { initialData, urlParams } from '../constants';
import { IInitialData } from '../types';
import onGetInitialPagination from '../helpers/onGetInitialPagination';

const usePagination = () => {
  const [data, setData] = useState<IInitialData>(initialData);
  const { actualPage, nextPage, prevPage, limit, offset, totalCountPages } =
    data;

  useEffect(() => {
    if (data.totalCountPages) {
      setData(onGetInitialPagination(data));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.totalCountPages]);

  const onIncrementActualPage = () => {
    urlParams.page = actualPage + 1;
    onChangeURLParams(urlParams);
    return setData((prevData) => {
      return {
        ...prevData,
        prevPage: prevData.prevPage + 1,
        actualPage: prevData.actualPage + 1,
        nextPage: prevData.nextPage + 1,
        offset: prevData.offset + prevData.limit,
      };
    });
  };

  const onDecrementActualPage = () => {
    if (actualPage > 1) {
      urlParams.page = actualPage - 1;
      onChangeURLParams(urlParams);
      return setData((prevData) => {
        let calculatedOffset = prevData.offset - prevData.limit;

        if (calculatedOffset <= 0) {
          calculatedOffset = 0;
        }

        return {
          ...prevData,
          prevPage: prevData.prevPage - 1,
          actualPage: prevData.prevPage,
          nextPage: prevData.actualPage,
          offset: calculatedOffset,
        };
      });
    }
  };

  const onChangeActualPage = (page: number) => {
    if (page < 1) {
      return setData((prevData) => ({ ...prevData, actualPage: 1 }));
    }

    const prevPage = page - 1;
    const actualPage = page;
    const nextPage = actualPage + 1;
    urlParams.page = page;

    onChangeURLParams(urlParams);
    return setData((prevData) => {
      let calculatedOffset = prevPage * prevData.limit;

      if (calculatedOffset <= 0) {
        calculatedOffset = 0;
      }

      return {
        ...prevData,
        prevPage,
        actualPage,
        nextPage,
        offset: calculatedOffset,
      };
    });
  };

  const onChangeLimitOnPage = (inputLimit: number) => {
    if (limit === inputLimit) {
      return;
    }

    if (inputLimit <= 20) {
      setData({
        ...initialData,
        limit: inputLimit,
        offset: 0,
      });
      onChangeActualPage(1);
    }
  };

  const onSetTotalPages = (totalCountPages: number) => {
    setData((prevData) => ({ ...prevData, totalCountPages }));
  };

  return {
    limit,
    offset,
    actualPage,
    nextPage,
    prevPage,
    totalCountPages,
    onChangeActualPage,
    onDecrementActualPage,
    onIncrementActualPage,
    onChangeLimitOnPage,
    onSetTotalPages,
  };
};

export default usePagination;
