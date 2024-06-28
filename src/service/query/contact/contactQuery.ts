import { useQuery } from "@tanstack/react-query";
import ContactService from "../../contactService";

// export function useContacts() {
//   return useQuery({
//     queryKey: ["contacts"],
//     queryFn: ContactService.getAllContacts,
//   });
// }
export function useContact(id: string) {
  return useQuery({
    queryKey: ["contact", { id }],
    queryFn: () => ContactService.getContactData(id),
  });
}
