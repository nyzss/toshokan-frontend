import { IUser } from "./types";
import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000",
});

export const LoginAccount = async ({ email, password }: IUser) => {
  try {
    const data = await instance.post("/auth/login", {
      email,
      password,
    });

    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
  }
};
