// import { ITeacher } from "./teacherType";

export interface IProgram {
  _id?: string;
  image: string; //
  name: string; //
  description: string;
  about: string; //
  type?: string; //
  price: string; //
  infos: IProgramInfo[]; //
  // teacher: string | ITeacher; //
}
export interface IProgramInfo {
  name: string;
  info: string;
}
