import { See } from "../Icon/See";
import { Paint } from "../Icon/Paint";
import { Title } from "../Title";

type Props = {
  checked: boolean;
  onChange: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

export function Switch({ checked, onChange }: Props) {
  return (
    <label className="border-2 border-[rgba(255,255,255,0.1)] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] rounded-full relative inline-flex items-center my-4 cursor-pointer w-1/4 self-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="checkbox"
        className="sr-only peer"
      />
      <Title
        color="white"
        className="absolute top-[15px] left-3 z-10 flex items-center gap-2 drop-shadow-none font-medium text-[16px]"
      >
        <Paint /> Customize
      </Title>
      <Title
        color="white"
        className="absolute top-[15px] right-6 z-10 flex items-center gap-2 drop-shadow-none font-medium text-[16px]"
      >
        <See /> Preview
      </Title>
      <div className="w-full h-14 bg-brand-primary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[' '] after:absolute after:bg-brand-secundary after:rounded-full after:h-full after:w-[50%] after:transition-all after:duration-500 after:ease-in-out dark:border-gray-600" />
    </label>
  );
}
