export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export type SetError = Dispatch<SetStateAction<string>>;

export type Toast = (
  options?: UseToastOptions | undefined
) => string | number | undefined;
