import { useQuery } from "@tanstack/react-query";
import ProgramService from "../../programService";
export function usePrograms() {
  return useQuery({
    queryKey: ["programs"],
    queryFn: ProgramService.getAllPrograms,
  });
}
export function useProgram(id: string) {
  return useQuery({
    queryKey: ["program", { id }],
    queryFn: () => ProgramService.getProgramData(id),
  });
}
