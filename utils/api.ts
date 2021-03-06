import axios from "axios";
import { ILogin, IRegister, SetError, Toast } from "./types/api";
import { INovels } from "./types/novel";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000",
});

export const LoginAccount = async (
  { email, password }: ILogin,
  setError: SetError,
  toast: Toast
) => {
  try {
    await instance
      .post("/auth/login", {
        email,
        password,
      })
      .then(() => {
        toast({
          title: "Success.",
          description: "You logged in!",
          status: "success",
          duration: 2500,
          isClosable: true,
        });
      });
  } catch (error) {
    if (axios.isAxiosError(error)) {
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
  setError: SetError,
  toast: Toast
) => {
  try {
    await instance
      .post("/auth/register", {
        username,
        email,
        password,
        passwordConfirmation,
      })
      .then(() => {
        toast({
          title: "You successfully created your account.",
          description: "Wecome to Toshokan!",
          status: "success",
          duration: 3500,
          isClosable: true,
        });
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

export const HomeNovels = async () => {
  try {
    const novels = await instance.get("/novel");
    return novels.data;
  } catch (error) {
    console.log(error);
  }
};

export const AddNovel = async (novel: INovels) => {
  try {
    const newNovel = await instance.post("/novel/add", novel);

    return newNovel.data;
  } catch (error) {
    console.log(error);
  }
};

export const GetSingleNovel = async (query: any) => {
  try {
    const id = query.queryKey[1];

    const allNovels = await instance.get(`/novel/${id}`);

    return allNovels.data;
  } catch (error) {
    console.log(error);
  }
};
