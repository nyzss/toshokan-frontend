import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

export type RegisterInputs = {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export interface RegisterProps {
  register: UseFormRegister<RegisterInputs>;
  errors: DeepMap<RegisterInputs, FieldError>;
}
