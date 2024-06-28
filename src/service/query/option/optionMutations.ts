import { useMutation, useQueryClient } from "@tanstack/react-query";
import OptionService from "../../optionService";
import { IOption } from "../../../types/optionType";

export function useCreatOption() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IOption) => OptionService.createOption(data),
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
        await queryClient.invalidateQueries({ queryKey: ["options"] });
      }
    },
  });
}

export function useUpdateOption() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IOption) => OptionService.updateOption(data),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["options"] });
      }
    },
  });
}

export function useDeleteOption() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => OptionService.deleteOption(id),
    onSuccess: () => {
      console.log("delete successfully");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["options"] });
      }
    },
  });
}
