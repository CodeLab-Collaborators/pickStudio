import {
  ReactNode,
  ButtonHTMLAttributes,
  CSSProperties,
  InputHTMLAttributes,
} from "react";

export type HeaderData = {
  width: string;
  sticky?: string;
};

export interface inputData {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleContinue: () => void;
}

export interface GlobalButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export interface GlobalInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  style?: CSSProperties;
  className?: string;
  inputType?: string;
}
