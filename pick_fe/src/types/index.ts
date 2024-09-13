import {
  ReactNode,
  ButtonHTMLAttributes,
  CSSProperties,
  InputHTMLAttributes,
  ReactElement,
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

export type textData = {
  authorName: string;
  place: string;
  rating: number;
  amount: number;
  amountHourly: number;
  date: string;
  props?: any;
};

export type imageData = {
  cover: any;
  authorCover: any;
  route?: any;
  userRoute: string;
  wishlistFunc: any;
  props?: any;
  currentImageIndex?: number;
};

export type cardData = {
  cover: any;
  props?: any;
  authorCover: any;
  authorName: string;
  place: string;
  rating: number;
  amount: number;
  amountHourly: number;
  date: string;
  route: string;
  userRoute: string;
  wishlistFunc?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

export type titleData = {
  name: string;
  rating: string;
  reviews: string;
  place: string;
};

export type StudioListButtonProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonPath: string;
  icon: ReactElement;
  iconColor: string;
};

export interface ProgressBarProps {
  value: number;
  backgroundColor?: string;
  barColor?: string;
}
