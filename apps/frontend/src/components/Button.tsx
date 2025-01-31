import React from "react";
import classNames from "classnames";

type TButton = {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  type: "submit" | "button" | "reset";
  grow?: boolean;
} & React.HTMLProps<HTMLButtonElement>;

export default function Button({
  variant,
  children,
  disabled,
  grow,
  ...props
}: TButton) {
  const variantClasses = classNames({
    "border border-kk-green text-kk-green hover:opacity-80":
      variant === "primary",
    "text-white bg-kk-green": variant === "secondary",
    "hover:opacity-80": variant === "secondary" && !disabled,
    "hover:bg-green-50": variant === "primary" && !disabled,
    "opacity-50 select-none cursor-default pointer-events-none": disabled,
    "flex-grow": grow,
  });

  return (
    <button
      className={`rounded font-semibold text-[12px] transition px-4 py-2 ${variantClasses}`}
      {...props}
    >
      {children}
    </button>
  );
}
