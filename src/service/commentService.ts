import { IComment } from "../types/commentType";
import axios from "./api";

const CommentService = {
  async getAllCommentsByNewsId(id: string) {
    if (id !== "" && id !== undefined) {
      return (await axios.get<IComment[]>(`/comments/bynewid/${id}`)).data;
    }
  },

  async createComment(data: IComment, id: string) {
    await axios.post(`/comments/${id}`, data);
  },

  async getCommentData(id: string) {
    try {
      const response = await axios.get(`/comments/${id}`);

      return response.data;
    } catch (error) {
      console.error("Error", error);
      throw new Error("Error.");
    }
  },

  async approved(id: string) {
    await axios.get(`/comments/approved/${id}`);
  },

  // async deleteComment(id: string | string[]) {
  //   const config = {
  //     data: { id: id },
  //   };
  //   await axios.delete(`/message`, config);
  // },src/service/query/Comment/CommentMutations.ts src/service/query/Comment/CommentQuery.ts
  // async readAllComment() {
  //   await axios.get(`/message/readAll`);
  // },
  // async readMessage(id: string) {
  //   await axios.get(`/message/read/${id}`);
  // },

  //   async getTeacherData(id: string) {
  //     try {
  //       const response = await axios.get(`/teachers/${id}`);
  //       return response.data;
  //     } catch (error) {
  //       console.error("Error uploading file: ", error);
  //       throw new Error("Error uploading file.");
  //     }
  //   },
};

export default CommentService;
