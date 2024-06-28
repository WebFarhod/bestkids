import axios from "./api";
const FileService = {
  async getImage(id: string) {
    return (
      await axios.get(`/files/${id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    ).data;
  },

  async uploadFile(file: File) {
    const formData = new FormData();
    formData.append("image", file);
    const rr = (
      await axios.post("/files", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    ).data;
    return rr;
  },
};

export default FileService;
