import { Dispatch, SetStateAction } from "react";

export type Lang = {
  code: string;
  name: string;
};

export interface Global {
  username: string;
  changeUsername: (value: string) => void;
}

export interface ILogin {
  email: string;
  password: string;
  setIsError: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
}

export interface EmailInputProps {
  inputColor: string;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  isError: boolean;
}

export interface PasswordInputProps {
  inputColor: string;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  isError: boolean;
}

export interface SubmitButtonProps {
  submitText: string;
  handleLogin: () => void;
}

export type TEmail = string;
export type TPassword = string;
