import { IOption } from "../types/optionType";
import axios from "./api";

const OptionService = {
  async createOption(data: IOption) {
    const mainData: IOption = {
      image: data.image,
      user: data.user,
      rating: data.rating,
      body: data.body,
    };
    await axios.post("/options", mainData);
  },

  async getAllOption() {
    return (await axios.get<IOption[]>("/options")).data;
  },

  async getOption(id: string) {
    await axios.get(`/options/${id}`);
  },

  async updateOption(data: IOption) {
    console.log("updateOption", data);

    return await axios.put("/options", data);
  },

  async deleteOption(id: string) {
    await axios.delete(`/options/${id}`);
  },
};

export default OptionService;
