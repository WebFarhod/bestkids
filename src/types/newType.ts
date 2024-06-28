export interface INew {
  _id?: string;
  type?: string;
  image: string;
  createdAt?: string;
  author?: string;
  title: string;
  body?: string;
  views?: number;
  // comment?: number;
}
export interface INewData {
  data: INew;
  comment?: number;
}
export interface INewType {
  _id?: string;
  title: string;
  inputValue?: string;
}
