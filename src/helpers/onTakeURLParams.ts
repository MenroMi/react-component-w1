const onTakeURLParams = (param: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  const value = urlParams.get(param);

  return value;
};

export default onTakeURLParams;
