"use client";
import classNames from "classnames";

type Props = {
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({
  type = "button",
  className,
  children,
  onClick,
}: Props) {
  return (
    <button
      onClick={() => onClick}
      type={type}
      className={classNames(
        "font-mplus bg-brand-secundary text-white rounded-lg transition-all ease-in-out duration-300 no-underline drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      {children}
    </button>
  );
}
