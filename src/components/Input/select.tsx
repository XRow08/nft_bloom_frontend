import ReactSelect, { StylesConfig } from "react-select";
import { Title } from "../Title";
import { InputErrorMessage } from "./InputErrorMessage";

type Props = {
  id?: string;
  name?: string;
  placeholder?: string;
  errors?: any;
  label1?: string;
  label2?: string;
};

export function Select({
  name,
  placeholder,
  errors,
  label1,
  label2,
  ...props
}: Props) {
  return (
    <div className="w-full">
      <InputErrorMessage name={name} errors={errors} />
      <Title children={label1} color="white" className="pl-4" />
      <Title
        children={label2}
        className="pl-4 text-[rgba(255,255,255,0.5)] mb-2"
      />
      <label className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#03FB75] to-[#00A3FF] h-12 rounded-lg">
        <ReactSelect
          placeholder={placeholder}
          name={name}
          {...props}
          options={[
            { value: "PNG", label: "PNG" },
            { value: "JPG", label: "JPG" },
            { value: "WEBP", label: "WEBP" },
          ]}
          styles={colourStyles}
        />
      </label>
    </div>
  );
}

const colourStyles: StylesConfig = {
  container: (styles) => ({ ...styles, width: "100%", height: "100%" }),
  control: (styles, { isFocused, menuIsOpen }) => ({
    ...styles,
    borderRadius: "0.5rem",
    padding: "6px 0",
    color: "#fff",
    backgroundColor: "rgb(31,26,56)",
    borderColor: menuIsOpen ? "#03FB75" : "#03FB75",
    ":hover": {
      borderColor: "#03FB75",
    },
    ":active": {
      borderColor: "#03FB75",
    },
    boxShadow: isFocused ? "0 0 0 0px #03FB75" : "",
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    transition: "all 300ms",
    backgroundColor: isSelected ? "#6effb2" : "#fff",
    color: isSelected ? "#000" : "#000",
    ":hover": {
      backgroundColor: isSelected ? "#03FB75" : "#03FB75",
      color: isSelected ? "#000" : "#000",
    },
  }),
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles, color: "rgba(156, 163, 175, 1)" }),
};
