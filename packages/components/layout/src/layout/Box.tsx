import * as React from "react";
import { BoxProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../types/styles.css";
import { extractSprinkleProps } from "../utils";
import { tokens } from "@pesto-ui/themes";

const Box = (props: BoxProps, ref: React.Ref<HTMLElement>) => {
  const { as = "div", color, background, children } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      style: {
        color: color && tokens.colors.$scale?.[color]?.[700],
        background: background && tokens.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Box = React.forwardRef(Box);
export { _Box as Box };
