export interface ITeacher {
  _id?: string;
  image: string;
  name: string;
  surname?: string;
  rank: string;
  description?: string;
  skills?: ITeacherSkill[];
  infos?: ITeacherInfo[];
  socials: ITeacherSocial[];
}

export interface ITeacherSkill {
  name: string;
  percent: string | number;
}

export interface ITeacherInfo {
  name: string;
  info: string;
}
export interface ITeacherSocial {
  name: string;
  link: string;
}
export interface ITeacherRank {
  _id?: string;
  title: string;
  inputValue?: string;
}
