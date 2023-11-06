export interface IObjectWithURL {
  name: string;
  url: string;
}

export interface IInitialData {
  actualPage: number;
  nextPage: number;
  prevPage: number;
  offset: number;
  limit: number;
  totalCountPages: number;
}

export interface IUrlParams {
  [x: string]: string | number;
}
