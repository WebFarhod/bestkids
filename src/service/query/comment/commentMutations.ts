import { useMutation, useQueryClient } from "@tanstack/react-query";
// import ContactService from "../../contactService";
// import { IContact } from "../../../types/contactType";
import CommentService from "../../commentService";

// export function useCreateContact() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (data: IContact) => CommentService.createContact(data),
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
//         await queryClient.invalidateQueries({ queryKey: ["commments"] });
//       }
//     },
//   });
// }

export function useApprovedContact() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => CommentService.approved(id),
    onSuccess: () => {
      console.log("delete successfully");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["comment"] });
      }
    },
  });
}
