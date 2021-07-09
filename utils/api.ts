import axios from "axios";
import { ILogin } from "./types/api";

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
    const login = await instance.post("/auth/login", {
      email,
      password,
    });

    return login.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setIsError(true);
      setError(error.response?.data);
      return error.response?.data;
    }
  }
};

export const CheckLoggedIn = async () => {
  try {
    const check = await instance.get("/auth/check");

    return check.data;
  } catch (error) {
    return {};
  }
};

export const HandleLogout = async () => {
  await instance.get("/auth/logout").then(() => {
    CheckLoggedIn();
  });
};
