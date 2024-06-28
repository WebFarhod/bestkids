import axios from "./api";
import { IMessage } from "../types/messageType";

const MessageService = {
  async getAllContacts() {
    const data = (await axios.get<IMessage[]>("/messages")).data;
    return data;
  },

  async createMessage(data: IMessage) {
    await axios.post("/contact", data);
  },

  // async createComments(data: IMessage) {
  //   await axios.post("/message/comment", data);
  // },

  async deleteContact(id: string | string[]) {
    const config = {
      data: { id: id },
    };
    await axios.delete(`/messages`, config);
  },

  async readAllMessage() {
    await axios.get(`/messages/readAll`);
  },

  async readMessage(id: string) {
    await axios.get(`/messages/read/${id}`);
  },

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

export default MessageService;
