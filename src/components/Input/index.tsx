type Props = {
  type: string;
  placeholder?: string;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: any;
  value?: string;
  errors?: any;
  name?: string;
  onBlur?: any;
  onKeyPress?: any;
};

export function Input({
  type,
  placeholder,
  onChange,
  onClick,
  value,
  name,
  onBlur,
  onKeyPress,
}: Props) {
  return (
    <div className="bg-gradient-to-r from-[#03FB75] to-[#00A3FF] p-[1px] rounded-lg h-12 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] w-full">
      <input
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        ref={null}
        name={name}
        onClick={onClick}
        onChange={onChange}
        min="0"
        value={value}
        type={type}
        placeholder={placeholder}
        className="w-full h-full px-4 rounded-lg drop-shadow-none shadow-none outline-none text-white bg-brand-primary "
      />
    </div>
  );
}
