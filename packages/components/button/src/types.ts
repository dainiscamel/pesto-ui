import { tokens } from "@pesto-ui/themes";
import { JSXElementConstructor, ReactElement } from "react";

export type ButtonProps = {
  color?: keyof typeof tokens.colors.$scale;
  iconSpacing: keyof typeof tokens.box.spacing;
  isDisabled: boolean;
  isLoading: boolean;
  leftIcon: ReactElement<any, string | JSXElementConstructor<any>>;
  loadingText: string;
  rightIcon: ReactElement<any, string | JSXElementConstructor<any>>;
  size: "lg" | "md" | "sm" | "xs";
  spinner: ReactElement<any, string | JSXElementConstructor<any>>;
  spinnerPlacement: "start" | "end";
  variant: "ghost" | "outline" | "solid";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
