import { useQuery } from "@tanstack/react-query";
import TeacherService from "../../teacherService";
export function useTeacherRank() {
  return useQuery({
    queryKey: ["teacherRank"],
    queryFn: TeacherService.getAllTeacherRank,
  });
}
