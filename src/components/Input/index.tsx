import "./index.css";
import { InputErrorMessage } from "./InputErrorMessage";
import { Title } from "../Title";
import classNames from "classnames";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { errors?: any; onChange?: any; label1?: string; label2?: string };

export function Input({
  type,
  placeholder,
  onChange,
  onClick,
  value,
  name,
  onBlur,
  onKeyDown,
  errors,
  label1 = "",
  label2 = "",
  className,
  ...props
}: Props) {
  return (
    <div className="flex flex-col items-start w-full">
      <Title
        children={label1}
        color="white"
        className={`pl-4 ${label1 === "" && "hidden"}`}
      />
      <Title
        children={label2}
        className={`pl-4 text-[rgba(255,255,255,0.5)] ${
          label2 === "" && "hidden"
        } mb-2`}
      />
      <div
        className={classNames(
          "bg-gradient-to-r from-[#03FB75] to-[#00A3FF] p-[1px] rounded-lg min-h-12 h-12 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] w-full",
          className
        )}
      >
        <input
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          name={name}
          onClick={onClick}
          onChange={onChange}
          min="0"
          autoComplete="off"
          value={value}
          type={type}
          placeholder={placeholder}
          {...props}
          className="bg-brand-primary w-full h-full px-4 rounded-lg drop-shadow-none shadow-none outline-none text-white"
        />
        <InputErrorMessage name={name} errors={errors} />
      </div>
    </div>
  );
}
