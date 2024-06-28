import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IClass } from "../../../types/classType";
import ClassService from "../../classService";

export function useCreatClass() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IClass) => ClassService.createClass(data),
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
        await queryClient.invalidateQueries({ queryKey: ["classes"] });
      }
    },
  });
}

export function useUpdateClass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IClass) => ClassService.updateClass(data),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["classes"] });
      }
    },
  });
}

export function useDeleteClass() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string | string[]) => ClassService.deleteClass(id),
    onSuccess: () => {
      console.log("delete successfully");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["classes"] });
      }
    },
  });
}

export function useDeleteMoreClass() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => ClassService.deleteClass(id),
    onSuccess: () => {
      console.log("delete successfully");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["classes"] });
      }
    },
  });
}
