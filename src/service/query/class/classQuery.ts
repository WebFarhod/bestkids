import { useQuery } from "@tanstack/react-query";
import ClassService from "../../classService";
export function useClasses() {
  return useQuery({
    queryKey: ["classes"],
    queryFn: ClassService.getAllClasss,
  });
}

export function useClass(id: string) {
  return useQuery({
    queryKey: ["class", { id }],
    queryFn: () => ClassService.getClassData(id),
  });
}
