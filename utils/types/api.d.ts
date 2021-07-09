export interface ILogin {
  email: string;
  password: string;
  setIsError: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
}
