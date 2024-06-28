import { ITeacher } from "./teacherType";

export interface IClass {
  _id?: string;
  image: string;
  name: string;
  description: string;
  about: string;
  type: string;
  price: string;
  infos: IClassInfo[];
  teacher: string | ITeacher | IClassTeacher;
}
export interface IClassInfo {
  name: string;
  info: string;
}

export interface IClassTeacher {
  _id: string;
  name: string;
  surname: string;
  image: string;
}
