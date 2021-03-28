import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  onChange: (arg: number) => void;
  value: number;
  children?: (value: number) => ReactNode;
};

export const RangeInput = ({ value, onChange, children, ...props }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.value == null) return;
    const value = parseInt(e.target.value);
    onChange(value);
  };

  return (
    <div className="flex w-full">
      <input type="range" className="flex-1" onChange={handleChange} value={value} {...props} />
      <div className="w-12 font-bold ml-2 text-right">
        {!children && value}
        {!!children && children(value)}
      </div>
    </div>
  );
};
