import { UserType } from "./types";
import axios, { AxiosError } from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000",
});

export const LoginAccount = async ({ email, password }: UserType) => {
  await instance
    .post("/auth/login", {
      email,
      password,
    })
    // we return the data
    .then((data) => {
      return data;
    })
    //we catch an err if any, then return res.data if any
    .catch((err: AxiosError) => {
      return err.response?.data;
    });
};
