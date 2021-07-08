import { Dispatch, SetStateAction } from "react";

export type Lang = {
  code: string;
  name: string;
};

export type UserData = {
  about?: string;
  createdAt?: string;
  id?: string;
  role?: string;
  updatedAt?: string;
  username?: string;
};
// | boolean;

export interface IUser {
  user: UserData;
  setUser: (value: UserData) => void;
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

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface ButtonProps {
  size: string;
}

export type TEmail = string;
export type TPassword = string;
