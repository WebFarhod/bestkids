import axios from "./api";
import { IProgram } from "../types/programType";

const ProgramService = {
  async getProgramImage(id: string) {
    return (
      await axios.get(`/programs/file/${id}`, {
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
      await axios.post("/programs/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    ).data;
  },
  async getAllPrograms() {
    return (await axios.get<IProgram[]>("/programs")).data;
  },
  async createProgram(data: IProgram) {
    const mainData: IProgram = {
      image: data.image,
      name: data.name,
      description: data.description,
      about: data.about,
      type: data.type,
      price: data.price,
      infos: data.infos,
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
    await axios.post("/programs", mainData);
  },
  async updateProgram(data: IProgram) {
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
    await axios.put("/programs", data);
  },
  async deleteProgram(id: string | string[]) {
    const config = {
      data: { id: id },
    };
    await axios.delete(`/programs`, config);
  },
  async getProgramData(id: string) {
    try {
      const response = await axios.get(`/programs/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error uploading file: ", error);
      throw new Error("Error uploading file.");
    }
  },
};

export default ProgramService;
