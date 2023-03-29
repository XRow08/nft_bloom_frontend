import ReactSelect, { StylesConfig } from "react-select";
import classNames from "classnames";

type Props = {
  id?: string;
  name?: string;
  placeholder?: string;
  errors?: any;
  onChange?: VoidFunction;
};

export function Select({ name, errors, ...props }: Props) {
  return (
    <div className="bg-gradient-to-r from-[#03FB75] to-[#00A3FF] rounded-lg h-12 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
      <ReactSelect
        name={name}
        {...props}
        options={[
          { value: "PNG", label: "PNG" },
          { value: "JPG", label: "JPG" },
          { value: "WEBP", label: "WEBP" },
        ]}
        classNames={{
          control: () =>
            classNames(
              "bg-brand-primary h-12 rounded-lg text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]",
            ),
          option: ({ isDisabled, isFocused, isSelected }) =>
            classNames(
              "transition-all duration-300 ease-in-out",
              isSelected && "bg-[#61ffab] text-[#000]",
              !isSelected && isFocused && "bg-[#03FB75] text-[#000]",
              isSelected && "active:bg-[#03FB75] text-[#000]",
              !isSelected && "active:bg-[#03FB75] text-[#000]"
            ),
          placeholder: ({ isFocused }) =>
            classNames(!isFocused && "text-[rgba(255, 255, 255, 0.9)]"),
        }}
      />
    </div>
  );
}
