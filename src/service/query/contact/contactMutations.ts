import { useMutation, useQueryClient } from "@tanstack/react-query";
import ContactService from "../../contactService";
import { IContact } from "../../../types/contactType";

export function useCreateContact() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IContact) => ContactService.createContact(data),
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
        await queryClient.invalidateQueries({ queryKey: ["contacts"] });
      }
    },
  });
}
