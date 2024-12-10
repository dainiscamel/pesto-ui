import { JSX } from "react";
import { StyleSprinkles } from "./styles.css";
import { tokens } from "@pesto-ui/themes";

type AsProps = {
  as?: keyof JSX.IntrinsicAttributes; // 태그 이름 동적으로 설정
};

export type AsElementProps = AsProps & React.HtmlHTMLAttributes<HTMLElement>;

export type ColorProps = {
  color: keyof typeof tokens.colors.$scale;
  background: keyof typeof tokens.colors.$scale;
};

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;
