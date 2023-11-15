import { ReactNode, ButtonHTMLAttributes, CSSProperties } from "react";

export type HeaderData = {
  width: string;
  sticky?: string;
};

export interface GlobalButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}
