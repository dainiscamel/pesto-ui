import { classes } from "@pesto-ui/themes";
import { AsElementProps, StyleProps } from "../types/types";
import { CSSProperties } from "@vanilla-extract/css";

export type TextProps = AsElementProps &
  StyleProps & {
    fontSize: keyof typeof classes.typography.text;
    align?: CSSProperties["textAlign"];
    casing?: CSSProperties["textTransform"];
    decoration?: CSSProperties["textDecoration"];
  };

export type HeadingProps = AsElementProps &
  StyleProps & {
    fontSize: keyof typeof classes.typography.heading;
  };
