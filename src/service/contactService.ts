import axios from "./api";
import { IContact } from "../types/contactType";

const ContactService = {
  // async getAllContacts() {
  //   return (await axios.get<IMessage[] | []>("/message")).data;
  // },

  async createContact(data: IContact) {
    await axios.post("/contact", data);
  },

  async getContactData(id: string) {
    try {
      const response = await axios.get<IContact>(`/contact/${id}`);

      return response.data;
    } catch (error) {
      console.error("Error", error);
      throw new Error("Error.");
    }
  },

  // async createComments(data: IComment) {
  //   await axios.post("/message/comment", data);
  // },

  // async deleteContact(id: string | string[]) {
  //   const config = {
  //     data: { id: id },
  //   };
  //   await axios.delete(`/message`, config);
  // },src/service/query/contact/contactMutations.ts src/service/query/contact/contactQuery.ts
  // async readAllContact() {
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

export default ContactService;
