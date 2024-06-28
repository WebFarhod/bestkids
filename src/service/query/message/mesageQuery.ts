import { useQuery } from "@tanstack/react-query";
import MessageService from "../../messageService";

export function useMessages() {
  return useQuery({
    queryKey: ["messages"],
    queryFn: MessageService.getAllContacts,
  });
}
// export function useContact(id: string) {
//   return useQuery({
//     queryKey: ["contact", { id }],
//     queryFn: () => ContactService.get(id),
//   });
// }
