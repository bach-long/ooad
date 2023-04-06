import axios from "../../config/axios";

export const loginService = (data) => {
  return axios.post("/api/auth/login", data);
};

export const loginMe = () => {
  return axios.get("/api/me");
};
