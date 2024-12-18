import * as React from "react";
import { GridItemProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../types/styles.css";
import { extractSprinkleProps } from "../utils";
import { tokens } from "@pesto-ui/themes";

const GridItem = (props: GridItemProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "div",
    color = "gray",
    background = "gray",
    children,
    area,
    colEnd,
    colStart,
    colSpan,
    rowEnd,
    rowStart,
    rowSpan,
  } = props;
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
        gridArea: area,
        gridColumnEnd: colEnd,
        gridColumnStart: colStart,
        gridColumn: colSpan,
        gridRowEnd: rowEnd,
        gridRowStart: rowStart,
        gridRow: rowSpan,
        color: tokens.colors.$scale?.[color]?.[700] ?? color,
        background: tokens.colors.$scale?.[background]?.[100] ?? background,
        ...props.style,
      },
    },
    children,
  );
};
const _GridItem = React.forwardRef(GridItem);
export { _GridItem as GridItem };
