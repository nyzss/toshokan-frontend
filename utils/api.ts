import { ILogin } from "./types";
import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000",
});

export const LoginAccount = async ({
  email,
  password,
  setIsError,
  setError,
}: ILogin) => {
  try {
    const data = await instance.post("/auth/login", {
      email,
      password,
    });

    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setIsError(true);
      setError(error.response?.data);
      // setTimeout(() => {
      //   setIsError(false);
      //   setError("");
      // }, 2500);
      return error.response?.data;
    }
  }
};
