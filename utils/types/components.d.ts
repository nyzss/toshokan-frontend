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
export interface IAuthNavButton {
  width?: string;
}
