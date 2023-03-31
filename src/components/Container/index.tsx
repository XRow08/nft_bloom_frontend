import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className}: Props) {
  return (
    <div
      className={classNames(
        "drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
