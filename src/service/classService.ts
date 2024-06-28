import axios from "./api";
import { IClass } from "../types/classType";

const ClassService = {
  async getClassImage(id: string) {
    return (
      await axios.get(`/classes/file/${id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    ).data;
  },
  async uploadFile(file: File) {
    const formData = new FormData();
    formData.append("image", file);

    return (
      await axios.post("/classes/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    ).data;
  },
  async getAllClasss() {
    return (await axios.get<IClass[]>("/classes")).data;
  },
  async createClass(data: IClass) {
    const mainData: IClass = {
      image: data.image,
      name: data.name,
      description: data.description,
      about: data.about,
      type: data.type,
      price: data.price,
      infos: data.infos,
      teacher: data.teacher,
    };
    // const formData = new FormData();
    // formData.append("image", data.image);
    // formData.append("name", data.name);
    // formData.append("description", data.description);
    // formData.append("about", data.about);
    // formData.append("teacher", data.teacher);
    // if (data?.infos) {
    //   data.infos.forEach((info, index) => {
    //     Object.entries(info).forEach(([key, value]) => {
    //       formData.append(`infos[${index}][${key}]`, value);
    //     });
    //   });
    // }
    await axios.post("/classes", mainData);
  },
  async updateClass(data: IClass) {
    // const formData = new FormData();
    // if (data._id) {
    //   formData.append("_id", data._id);
    // }
    // formData.append("image", data.image);
    // formData.append("name", data.name);
    // formData.append("surname", data.surname);
    // formData.append("rank", data.rank);
    // formData.append("description", data.description);
    // if (data?.skills) {
    //   data.skills.forEach((skill, index) => {
    //     Object.entries(skill).forEach(([key, value]) => {
    //       formData.append(`skills[${index}][${key}]`, value as string);
    //     });
    //   });
    // }
    // if (data?.infos) {
    //   data.infos.forEach((info, index) => {
    //     Object.entries(info).forEach(([key, value]) => {
    //       formData.append(`infos[${index}][${key}]`, value);
    //     });
    //   });
    // }
    await axios.put("/classes", data);
  },
  async deleteClass(id: string | string[]) {
    const config = {
      data: { id: id },
    };
    await axios.delete(`/classes`, config);
  },
  async getClassData(id: string) {
    try {
      const response = await axios.get(`/classes/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error uploading file: ", error);
      throw new Error("Error uploading file.");
    }
  },
};

export default ClassService;
