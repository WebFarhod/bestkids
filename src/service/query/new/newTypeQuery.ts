import { useQuery } from "@tanstack/react-query";
import NewService from "../../newService";
export function useNewsType() {
  return useQuery({
    queryKey: ["newstype"],
    queryFn: NewService.getAllNewsType,
  });
}
