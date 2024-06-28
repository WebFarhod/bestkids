import { useQuery } from "@tanstack/react-query";
import CommentService from "../../commentService";

export function useComments(id: string) {
  return useQuery({
    queryKey: ["comments", { id }],
    queryFn: () => CommentService.getAllCommentsByNewsId(id),
  });
}
export function useComment(id: string) {
  return useQuery({
    queryKey: ["comment", { id }],
    queryFn: () => CommentService.getCommentData(id),
  });
}
