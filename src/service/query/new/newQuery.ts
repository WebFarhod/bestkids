import { useQuery } from "@tanstack/react-query";
import NewService from "../../newService";
export function useNews() {
  return useQuery({
    queryKey: ["news"],
    queryFn: NewService.getAllNews,
  });
}

export function useNew(id: string) {
  return useQuery({
    queryKey: ["new", { id }],
    queryFn: () => NewService.getNewData(id),
  });
}
