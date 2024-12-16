import { tokens } from "@pesto-ui/themes";
import { style } from "@vanilla-extract/css";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

export const BaseStyle = style({
  padding: 0,
  margin: 0,

  // @ts-ignore
  "&:focus-visible": {
    outline: "none",
    boxShadow: tokens.box.shadows.outline,
  },
});

const MarginAndPaddingProperties = defineProperties({
  properties: {
    marginTop: tokens.box.spacing,
    marginRight: tokens.box.spacing,
    marginBottom: tokens.box.spacing,
    marginLeft: tokens.box.spacing,
    paddingTop: tokens.box.spacing,
    paddingRight: tokens.box.spacing,
    paddingBottom: tokens.box.spacing,
    paddingLeft: tokens.box.spacing,
  },
  shorthands: {
    margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

const BorderStyleProperties = defineProperties({
  properties: {
    borderRadius: tokens.box.radii,
  },
});

const BoxShadowStyleProps = defineProperties({
  properties: {
    boxShadow: tokens.box.shadows,
  },
});

export const StyleSprinkles = createSprinkles(
  MarginAndPaddingProperties,
  BorderStyleProperties,
  BoxShadowStyleProps,
);
