import classNames from "classnames";

type Props = {
  color?: "black" | "white";
  className?: string;
  children: React.ReactNode;
  ref?: any;
  onClick?: () => void;
  id?: string;
};

export function Title({
  children,
  className,
  color,
  ref,
  onClick,
  id,
}: Props) {
  return (
    <h1
      id={id}
      ref={ref}
      onClick={onClick}
      className={classNames(
        "font-mplus drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]",
        {
          "text-black": color === "black",
        },
        {
          "text-white": color === "white",
        },
        className
      )}
    >
      {children}
    </h1>
  );
}
