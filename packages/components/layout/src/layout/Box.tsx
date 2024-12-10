import * as React from "react";
import { BoxProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../types/styles.css";
import { extractSprinkleProps } from "../utils";

const Box = (props: BoxProps, ref: React.Ref<HTMLElement>) => {
  const { as = "div", children } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      style: {
        background: "pink",
      },
    },
    children,
  );
};

const _Box = React.forwardRef(Box);
export { _Box as Box };
