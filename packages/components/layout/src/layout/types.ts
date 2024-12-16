import { tokens } from "@pesto-ui/themes";

import { AsElementProps, StyleProps } from "../types/types";

export type BoxProps = AsElementProps & StyleProps;
export type DividerProps = {
  orientation?: "vertical" | "horizontal";
  color?: keyof typeof tokens.colors.$scale;
  size?: number;
  variant?: "solid" | "dashed";
} & React.HTMLAttributes<HTMLHRElement>;
