import axios from "axios";
import { ILogin, IRegister, SetError } from "./types/api";

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

export const RegisterAccount = async (
  { username, email, password, passwordConfirmation }: IRegister,
  setError: SetError
) => {
  try {
    await instance.post("/auth/register", {
      username,
      email,
      password,
      passwordConfirmation,
    });
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      setError(error.response?.data);
      return error.response?.data;
    }
    console.log(error);
  }
};
