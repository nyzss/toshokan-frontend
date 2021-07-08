import { Dispatch, SetStateAction } from "react";

export type Lang = {
  code: string;
  name: string;
};

export interface Global {
  username: string;
  changeUsername: (value: string) => void;
}

export type UserType = {
  email: string;
  password: string;
};

export interface EmailInputProps {
  inputColor: string;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

export interface PasswordInputProps {
  inputColor: string;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

export interface SubmitButtonProps {
  submitText: string;
  handleLogin: () => Promise<void>;
}

export type TEmail = string;
export type TPassword = string;
