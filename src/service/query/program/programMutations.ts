import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IProgram } from "../../../types/programType";
import ProgramService from "../../programService";

export function useCreatProgram() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IProgram) => ProgramService.createProgram(data),
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
        await queryClient.invalidateQueries({ queryKey: ["programs"] });
      }
    },
  });
}

export function useUpdateProgram() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IProgram) => ProgramService.updateProgram(data),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["programs"] });
      }
    },
  });
}

export function useDeleteProgram() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string | string[]) => ProgramService.deleteProgram(id),
    onSuccess: () => {
      console.log("delete successfully");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["programs"] });
      }
    },
  });
}

export function useDeleteMoreProgram() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => ProgramService.deleteProgram(id),
    onSuccess: () => {
      console.log("delete successfully");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["programs"] });
      }
    },
  });
}
