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
  isLoading: boolean;
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

export interface AuthErrorProps {
  error: string;
}
