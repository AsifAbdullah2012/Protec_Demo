import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

export const searchParts = (query) => API.post("/search", { query });
export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return API.post("/upload", formData);
};
