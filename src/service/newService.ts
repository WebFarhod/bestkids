import axios from "./api";
import { INew, INewType } from "../types/newType";

const NewService = {
  // async getNewImage(id: string) {
  //   return (
  //     await axios.get(`/news/file/${id}`, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //   ).data;
  // },

  async uploadFile(file: File) {
    const formData = new FormData();
    formData.append("image", file);

    return (
      await axios.post("/news/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    ).data;
  },

  async getAllNews() {
    return (await axios.get<INew[]>("/news")).data;
  },
  async getNewView(id: string) {
    return await axios.get(`/news/view/${id}`);
  },

  async createNew(data: INew) {
    const mainData: INew = {
      title: data.title,
      image: data.image,
      type: data.type,
      body: data.body,
    };
    await axios.post("/news", mainData);
  },

  async updateNew(data: INew) {
    await axios.put("/news", data);
  },

  async deleteNew(id: string) {
    // const config = {
    //   data: { id: id },
    // };
    await axios.delete(`/news/${id}`);
  },

  async getNewData(id: string) {
    try {
      const response = await axios.get(`/news/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error uploading file: ", error);
      throw new Error("Error uploading file.");
    }
  },

  async getAllNewsType() {
    return (await axios.get("/news/type")).data;
  },

  async createNewType(data: INewType) {
    const mainData = {
      title: data.title,
    };
    await axios.post("/news/type/", mainData);
  },
};

export default NewService;
