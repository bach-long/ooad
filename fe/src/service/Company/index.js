import axios from "../../config/axios";

export const getCompaniesService = () => {
  return axios.get("/api/company/all");
};
