import * as React from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { clsx } from "clsx";
import { ButtonProps } from "./types";
import { tokens } from "@pesto-ui/themes";
import {
  activeColorVariant,
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
  iconStyle,
  spinnerStyle,
} from "./style.css";

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    color = "gray",
    iconSpacing = 1,
    isDisabled = false,
    isLoading = false,
    leftIcon,
    loadingText,
    rightIcon,
    size = "md",
    spinner = <div className={spinnerStyle({ size })} />,
    spinnerPlacement = "start",
    variant = "solid",
    children,
    ...rest
  } = props;

  const endableColor = tokens.colors.$scale[color][500];
  const hoverColor =
    variant === "solid"
      ? tokens.colors.$scale[color][600]
      : tokens.colors.$scale[color][50];
  const activeColor =
    variant === "solid"
      ? tokens.colors.$scale[color][700]
      : tokens.colors.$scale[color][100];

  const disabled = isDisabled;

  return (
    <button
      {...rest}
      ref={ref}
      className={clsx([buttonStyle({ size, variant })])}
      disabled={disabled}
      data-loading={isLoading}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: endableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...props.style,
      }}
    >
      {isLoading && (
        <span className="button-loading-container">
          {spinnerPlacement === "start" && spinner}
          {loadingText && <span className="loading-text">{loadingText}</span>}
          {spinnerPlacement === "end" && spinner}
        </span>
      )}
      {!isLoading && (
        <span className="button-container">
          {leftIcon && (
            <span className={iconStyle({ size, iconSpacing })}>{leftIcon}</span>
          )}
          <span>{children}</span>
          {rightIcon && (
            <span className={iconStyle({ size, iconSpacing })}>
              {rightIcon}
            </span>
          )}
        </span>
      )}
    </button>
  );
};

const _Button = React.forwardRef<HTMLButtonElement, ButtonProps>(Button);

export { _Button as Button };
