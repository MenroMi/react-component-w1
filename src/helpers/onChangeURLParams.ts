interface IParams {
  [x: string]: string | number;
}

const onChangeURLParams = (params: IParams) => {
  let resultedParams = '';

  for (const key in params) {
    if (!Boolean(params[key])) {
      continue;
    }

    if (resultedParams.length > 0) {
      resultedParams += `&${key}=${params[key]}`;
      continue;
    }

    resultedParams += `${key}=${params[key]}`;
  }

  history.replaceState(null, '', '?' + resultedParams);
};

export default onChangeURLParams;
