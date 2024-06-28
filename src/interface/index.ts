interface ISlide {}

interface ISocialArray {
  link: string;
}

export interface ITeacherProp extends ISlide {
  _id: string | undefined;
  img: string;
  name: string;
  job: string;
  socialArr: ISocialArray[];
}

// export interface IParentSay extends ISlide {
//   stars: number;
//   description: string;
//   img: string;
//   name: string;
// }

// export interface INews extends ISlide {
//   _id: string;
//   type: string;
//   img: string;
//   date: string;
//   create: string;
//   commetMunber: number;
//   text: string;
// }
