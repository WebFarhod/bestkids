/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ITeacher } from "../../types/teacherType";

import { ITeacher } from "../../types/teacherType";

// export const visuallyHidden = {
//   border: 0,
//   margin: -1,
//   padding: 0,
//   width: "1px",
//   height: "1px",
//   overflow: "hidden",
//   position: "absolute",
//   whiteSpace: "nowrap",
//   clip: "rect(0 0 0 0)",
// };

// type DataItem = ITeacher;

// export function emptyRows(
//   page: number,
//   rowsPerPage: number,
//   arrayLength: number
// ) {
//   return page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
// }

// // function descendingComparator(a: DataItem, b: DataItem, orderBy: string) {
// //   if (a[orderBy] === null) {
// //     return 1;
// //   }
// //   if (b[orderBy] === null) {
// //     return -1;
// //   }
// //   if (b[orderBy] < a[orderBy]) {
// //     return -1;
// //   }
// //   if (b[orderBy] > a[orderBy]) {
// //     return 1;
// //   }
// //   return 0;
// // }

// function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
//   if (a[orderBy] === null) {
//     return 1;
//   }
//   if (b[orderBy] === null) {
//     return -1;
//   }
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// export function getComparator<Key extends keyof ITeacher>(
//   order: "asc" | "desc",
//   orderBy: Key
// ): (a: ITeacher, b: ITeacher) => number {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// interface IApplyFilter {
//   inputData: ITeacher[] | [];
//   comparator: (a: DataItem, b: DataItem) => number;
//   filterName: string;
// }

// export function applyFilter({
//   inputData,
//   comparator,
//   filterName,
// }: IApplyFilter) {
//   const stabilizedThis: [ITeacher, number][] = inputData.map((el, index) => [
//     el,
//     index,
//   ]);

//   stabilizedThis.sort((a: [ITeacher, number], b: [ITeacher, number]) => {
//     const order = comparator(a[0], b[0]);

//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });

//   inputData = stabilizedThis.map((el) => el[0]);

//   if (filterName) {
//     inputData = inputData.filter(
//       (user) =>
//         (user.name + " " + user.surname)
//           .toLowerCase()
//           .indexOf(filterName.toLowerCase()) !== -1
//     );
//   }

//   return inputData;
// }

export const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: "1px",
  height: "1px",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  clip: "rect(0 0 0 0)",
};

export function emptyRows(
  page: number,
  rowsPerPage: number,
  arrayLength: number
) {
  return page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T): number {
  if (a[orderBy] === null) {
    return 1;
  }
  if (b[orderBy] === null) {
    return -1;
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof any>(
  order: "asc" | "desc",
  orderBy: Key
): (a: { [key in Key]: any }, b: { [key in Key]: any }) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface IApplyFilter {
  inputData: ITeacher[];
  comparator: (a: ITeacher, b: ITeacher) => number;
  filterName: string;
}

// export function applyFilter({
//   inputData,
//   comparator,
//   filterName,
// }: IApplyFilter) {
//   const stabilizedThis = inputData.map((el, index) => [el, index]);

//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });

//   inputData = stabilizedThis.map((el) => el[0]);

//   if (filterName) {
//     inputData = inputData.filter(
//       (user) => user.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
//     );
//   }

//   return inputData;
// }
export function applyFilter({
  inputData,
  comparator,
  filterName,
}: IApplyFilter): ITeacher[] {
  const stabilizedThis: [ITeacher, number][] = inputData.map((el, index) => [
    el,
    index,
  ]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  let filteredData = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    filteredData = filteredData.filter(
      (user) =>
        (user.name + " " + user.surname)
          .toLowerCase()
          .indexOf(filterName.toLowerCase()) !== -1
    );
  }

  return filteredData;
}
