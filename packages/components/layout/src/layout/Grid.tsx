import * as React from "react";
import { GridProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../types/styles.css";
import { extractSprinkleProps } from "../utils";
import { tokens } from "@pesto-ui/themes";

const Grid = (props: GridProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "div",
    color = "gray",
    background = "gray",
    children,
    autoColumns,
    autoFlow,
    autoRows,
    columnGap,
    column,
    gap,
    row,
    rowGap,
    templateColumns,
    templateRows,
    templateAreas,
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
        display: "grid",
        gridAutoColumns: autoColumns,
        gridAutoFlow: autoFlow,
        gridAutoRows: autoRows,
        gridColumnGap: columnGap,
        gridGap: gap,
        gridRowGap: rowGap,
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        gridTemplateAreas: templateAreas,
        gridColumn: column,
        gridRow: row,
        color: tokens.colors.$scale?.[color]?.[700] ?? color,
        background: tokens.colors.$scale?.[background]?.[100] ?? background,
        ...props.style,
      },
    },
    children,
  );
};
const _Grid = React.forwardRef(Grid);
export { _Grid as Grid };
