import * as React from "react";
import { clsx } from "clsx";
import { ButtonProps } from "./types";
import { tokens } from "@pesto-ui/themes";
import { iconStyle } from "./style.css";

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    color,
    iconSpacing,
    isActive,
    isDisabled,
    isLoading,
    leftIcon,
    loadingText,
    rightIcon,
    size = "md",
    spinner,
    spinnerPlacement,
    variant,
    children,
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      {...rest}
      style={{
        color: color && tokens.colors.$scale?.[color]?.[700],
        ...props.style,
      }}
    >
      {isLoading && spinnerPlacement === "start" && spinner}
      {leftIcon && <span className={iconStyle({ size, iconSpacing })}></span>}
      {children}
      {rightIcon && <span className={iconStyle({ size, iconSpacing })}></span>}
      {isLoading && spinnerPlacement === "end" && spinner}
    </button>
  );
};

const _Button = React.forwardRef<HTMLButtonElement, ButtonProps>(Button);

export { _Button as Button };
