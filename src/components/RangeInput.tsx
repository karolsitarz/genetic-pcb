import { ChangeEvent, InputHTMLAttributes, useState } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  onChange: (arg: number) => void;
  value: number;
};

export const RangeInput = ({ value, onChange, ...props }: Props) => {
  const [innerValue, setInnerValue] = useState<number>(value);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.value == null) return;
    const value = parseInt(e.target.value);
    setInnerValue(value);
  };

  return (
    <div className="flex w-full">
      <input
        type="range"
        className="flex-1"
        onChange={handleChange}
        onMouseUp={() => onChange(innerValue)}
        value={innerValue}
        {...props}
      />
      <div className="w-8 font-bold ml-2 text-right">{innerValue}</div>
    </div>
  );
};
