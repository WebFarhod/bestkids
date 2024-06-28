import { useMutation, useQueryClient } from "@tanstack/react-query";
import MessageService from "../../messageService";

// export function useCreateContact() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (data: IMessage) => ContactService.createContact(data),
//     onMutate: () => {
//       // console.log("mutate");
//     },
//     onError: () => {
//       console.log("error");
//     },
//     onSuccess: () => {
//       // console.log("success");
//     },
//     onSettled: async (_, error) => {
//       // console.log("settled");
//       if (error) {
//         console.log(error);
//       } else {
//         await queryClient.invalidateQueries({ queryKey: ["contacts"] });
//       }
//     },
//   });
// }

export function useDeleteMessage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string | string[]) => MessageService.deleteContact(id),
    onSuccess: () => {
      console.log("delete successfully");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["messages"] });
      }
    },
  });
}

export function useReadAllMessage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => MessageService.readAllMessage(),
    onSuccess: () => {
      console.log("read All successfully");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["messages"] });
      }
    },
  });
}

export function useReadMessage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => MessageService.readMessage(id),
    onSuccess: () => {
      console.log("read All successfully");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["messages"] });
      }
    },
  });
}
