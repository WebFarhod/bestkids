import { useQuery } from "@tanstack/react-query";

import TeacherService from "../../teacherService";

export function useTeaches() {
  return useQuery({
    queryKey: ["teachers"],
    queryFn: TeacherService.getAllTeachers,
  });
}
export function useTeacher(id: string) {
  return useQuery({
    queryKey: ["teacher", { id }],
    queryFn: () => TeacherService.getTeacherData(id),
  });
}
