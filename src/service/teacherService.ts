import axios from "./api";
import { ITeacher, ITeacherRank } from "../types/teacherType";

const TeacherService = {
  async getTeacherImage(id: string) {
    return (
      await axios.get(`/teachers/file/${id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    ).data;
  },

  async getAllTeachers() {
    return (await axios.get<ITeacher[]>("/teachers")).data;
  },

  async createTeacher(data: ITeacher) {
    // const formData = new FormData();
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

    // const newData = data.socials.filter((item) => item.link !== "");
    await axios.post("/teachers", {
      ...data,
      socials: data.socials.filter((item) => item.link !== ""),
    });
    // await axios.post("/teachers", data);
  },

  async updateTeacher(data: ITeacher) {
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
    await axios.put("/teachers", data);
  },

  async deleteTeacher(id: string | string[]) {
    const config = {
      data: { id: id },
    };
    await axios.delete(`/teachers`, config);
  },

  async getTeacherData(id: string) {
    try {
      const response = await axios.get(`/teachers/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error uploading file: ", error);
      throw new Error("Error uploading file.");
    }
  },

  async getAllTeacherRank() {
    return(await axios.get("/teachers/rank")).data;
  },

  async createTEacherRank(data: ITeacherRank) {
    const mainData = {
      title: data.title,
    };
    await axios.post("/teachers/rank", mainData);
  },
};

export default TeacherService;
