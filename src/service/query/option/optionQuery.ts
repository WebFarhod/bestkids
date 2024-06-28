import { useQuery } from "@tanstack/react-query";
import OptionService from "../../optionService";
export function useOptions() {
  return useQuery({
    queryKey: ["options"],
    queryFn: OptionService.getAllOption,
  });
}

export function useOption(id: string) {
  return useQuery({
    queryKey: ["option", { id }],
    queryFn: () => OptionService.getOption(id),
  });
}
