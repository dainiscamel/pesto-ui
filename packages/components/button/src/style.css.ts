import { recipe } from "@vanilla-extract/recipes";
import { createVar, keyframes } from "@vanilla-extract/css";
import { classes, tokens } from "@pesto-ui/themes";

export const enableColorVariant = createVar(); // 500
export const hoverColorVariant = createVar(); // 600 outline 50 ghost 50
export const activeColorVariant = createVar(); // 700 outline 100 ghost 100

export const buttonStyle = recipe({
  base: {
    margin: 0,
    padding: 0,
    border: 0,

    borderRadius: tokens.box.radii.md,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    userSelect: "none",
    transition: "background-color 0.2s, color 0.2s, border-color 0.2s",
    // @ts-ignore
    "&[disabled]": {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    '&[data-loading="true"]': {
      "& span": {
        opacity: 0,
      },
    },
    "&:focus-visible": {
      outline: "none",

      boxShadow: tokens.box.shadows.outline,
    },
  },
  variants: {
    size: {
      xs: {
        ...classes.typography.text.xs,
        fontWeight: tokens.typography.fontWeight[600],
        padding: "0 0.5rem",
        gap: "0.5rem",
        height: "1.5rem",
      },
      sm: {
        ...classes.typography.text.sm,
        fontWeight: tokens.typography.fontWeight[600],
        padding: "0 0.75rem",
        gap: "0.5rem ",
        height: "2rem",
      },
      md: {
        ...classes.typography.text.md,
        fontWeight: tokens.typography.fontWeight[600],
        padding: "0 1rem",
        gap: "0.5rem",
        height: "2.5rem",
      },
      lg: {
        ...classes.typography.text.lg,
        fontWeight: tokens.typography.fontWeight[600],
        padding: "0 1.5rem",
        gap: "0.5rem",
        height: "3rem",
      },
    },
    variant: {
      solid: {
        backgroundColor: enableColorVariant,
        color: tokens.colors.$scale.gray[50],

        "&:hover:not([disabled])": {
          backgroundColor: hoverColorVariant,
        },
        "&:active:not([disabled])": {
          backgroundColor: activeColorVariant,
        },
      },
      outline: {
        border: `1px solid ${enableColorVariant}`,
        color: enableColorVariant,

        "&:hover:not([disabled])": {
          backgroundColor: hoverColorVariant,
        },
        "&:active:not([disabled])": {
          backgroundColor: activeColorVariant,
        },
      },
      ghost: {
        color: enableColorVariant,

        "&:hover:not([disabled])": {
          backgroundColor: hoverColorVariant,
        },
        "&:active:not([disabled])": {
          backgroundColor: activeColorVariant,
        },
      },
    },
  },
});

export const iconStyle = recipe({
  base: {
    display: "flex",
    alignItems: "center",
  },
  variants: {
    size: {
      xs: {
        ...classes.typography.text.xs,
        fontWeight: tokens.typography.fontWeight[600],
      },
      sm: {
        ...classes.typography.text.sm,
        fontWeight: tokens.typography.fontWeight[600],
      },
      md: {
        ...classes.typography.text.md,
        fontWeight: tokens.typography.fontWeight[600],
      },
      lg: {
        ...classes.typography.text.lg,
        fontWeight: tokens.typography.fontWeight[600],
      },
    },
    iconSpacing: {
      ...tokens.box.spacing,
    },
  },
});

const spinKeyframes = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spinnerStyle = recipe({
  base: {
    position: "absolute",
    animation: `${spinKeyframes} 0.45s linear infinite`,
    display: "inline-block",
    borderTop: "2px solid currentcolor",
    borderRight: "2px solid currentcolor",
    borderBottom: "2px solid transparent",
    borderLeft: "2px solid transparent",
    borderRadius: "50%",
  },
  variants: {
    size: {
      xs: {
        width: tokens.typography.fontSize[12],
        height: tokens.typography.fontSize[12],
        left: `calc(50% - ${tokens.typography.fontSize[12]}/2)`,
      },
      sm: {
        width: tokens.typography.fontSize[14],
        height: tokens.typography.fontSize[14],
        left: `calc(50% - ${tokens.typography.fontSize[14]}/2)`,
      },
      md: {
        width: tokens.typography.fontSize[16],
        height: tokens.typography.fontSize[16],
        left: `calc(50% - ${tokens.typography.fontSize[16]}/2)`,
      },
      lg: {
        width: tokens.typography.fontSize[18],
        height: tokens.typography.fontSize[18],
        left: `calc(50% - ${tokens.typography.fontSize[18]}/2)`,
      },
    },
  },
});
