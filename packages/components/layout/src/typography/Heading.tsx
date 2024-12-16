import * as React from "react";
import { HeadingProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../types/styles.css";
import { extractSprinkleProps } from "../utils";
import { tokens } from "@pesto-ui/themes";
import { textStyle } from "./style.css";

const Heading = (props: HeadingProps, ref: React.Ref<HTMLElement>) => {
  const { as = "h1", color = "gray", background, children, fontSize } = props;

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
        textStyle({ fontSize }),
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

const _Heading = React.forwardRef(Heading);
export { _Heading as Heading };
