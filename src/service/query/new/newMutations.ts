import { useMutation, useQueryClient } from "@tanstack/react-query";
import { INew, INewType } from "../../../types/newType";
import NewService from "../../newService";

export function useCreatNew() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: INew) => NewService.createNew(data),
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
        await queryClient.invalidateQueries({ queryKey: ["news"] });
      }
    },
  });
}

export function useUpdateNew() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: INew) => NewService.updateNew(data),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["news"] });
      }
    },
  });
}
export function useViewNew() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => NewService.getNewView(id),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["news"] });
      }
    },
  });
}

export function useDeleteNew() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => NewService.deleteNew(id),
    onSuccess: () => {
      console.log("delete successfully");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["news"] });
      }
    },
  });
}

export function useDeleteMoreNew() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => NewService.deleteNew(id),
    onSuccess: () => {
      console.log("delete successfully");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["news"] });
      }
    },
  });
}

export function useCreatNewType() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: INewType) => NewService.createNewType(data),
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
        await queryClient.invalidateQueries({ queryKey: ["newstype"] });
      }
    },
  });
}
