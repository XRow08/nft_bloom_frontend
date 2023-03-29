import classNames from "classnames";
import { Input } from ".";
import { Title } from "../Title";

type Props = {
  placeholder?: string;
  onClick?: any;
  value?: string;
  errors?: any;
  doubleClick?: boolean;
  item?: string;
  index?: number;
  keyCheck?: number;
  provided?: any;
  ref?: any;
};

export function InputTodo({
  keyCheck,
  doubleClick,
  onClick,
  item,
  index,
  provided,
  ref,
}: Props) {
  return (
    <>
      {!doubleClick && (
        <div
          className={classNames(
            "bg-transparent transition-all duration-75 ease-in rounded-lg h-12 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] w-full",
            {
              "bg-gradient-to-r from-[#03FB75] to-[#00A3FF] p-[1px]":
                keyCheck === index,
            }
          )}
        >
          <button
            value={index}
            onClick={onClick}
            className={classNames(
              "w-full h-full px-4 rounded-lg drop-shadow-none shadow-none outline-none text-white bg-brand-primary "
            )}
            children={item}
          />
        </div>
      )}
      {doubleClick && <Input onClick={onClick} value={item} type="text" />}
    </>
  );
}
