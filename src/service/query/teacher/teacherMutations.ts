import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ITeacher, ITeacherRank } from "../../../types/teacherType";
import TeacherService from "../../teacherService";

export function useCreateTeacher() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ITeacher) => TeacherService.createTeacher(data),
    onMutate: () => {
      // console.log("mutate");
    },
    onError: () => {
      console.log("error");
    },
    onSuccess: () => {
      // console.log("success");
    },
    onSettled: async (_, error) => {
      // console.log("settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["teachers"] });
      }
    },
  });
}

export function useUpdateTeacher() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ITeacher) => TeacherService.updateTeacher(data),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["teachers"] });
      }
    },
  });
}

export function useDeleteTeacher() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string | string[]) => TeacherService.deleteTeacher(id),
    onSuccess: () => {
      console.log("delete successfully");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["teachers"] });
      }
    },
  });
}

// export functi/on useDeleteMoreTeacher() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (id: string) => TeacherService.deleteTeacher(id),
//     onSuccess: () => {
//       console.log("delete successfully");
//     },
//     onSettled: async (_, error) => {
//       if (error) {
//         console.log(error);
//       } else {
//         await queryClient.invalidateQueries({ queryKey: ["teachers"] });
//       }
//     },
//   });
// }

export function useCreatTeacherRank() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ITeacherRank) => TeacherService.createTEacherRank(data),
    onMutate: () => {
      // console.log("mutate");
    },
    onError: () => {
      console.log("error");
    },
    onSuccess: () => {
      // console.log("success");
    },
    onSettled: async (_, error) => {
      // console.log("settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["teacherRank"] });
      }
    },
  });
}
