import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

export type RegisterInputs = {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type LoginInputs = {
  email: string;
  password: string;
};

export interface RegisterProps {
  register: UseFormRegister<RegisterInputs>;
  errors: DeepMap<RegisterInputs, FieldError>;
}

export interface LoginProps {
  register: UseFormRegister<LoginInputs>;
  email?: FieldError | undefined;
  password?: FieldError | undefined;
}
