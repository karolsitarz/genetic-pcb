import { ReactNode, useState } from "react";
import { Range } from "react-range";

type Props = {
  onChange: (arg: number) => void;
  value: number;
  children?: (value: number) => ReactNode;
  min: number;
  max: number;
  step?: number;
  className?: string;
  label: string;
  dangerZoneClassName?: string;
};

export const RangeInput = ({
  value,
  onChange,
  children,
  min,
  max,
  step,
  className,
  label,
  dangerZoneClassName = "w-1/3",
}: Props) => {
  const [innerValue, setInnerValue] = useState(value);

  return (
    <label className={`block ${className}`}>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-gray-700 mr-4">{label}</h1>
        <span className="text-gray-500 font-bold">
          {children ? children(innerValue) : innerValue}
        </span>
      </div>
      <div className="w-full px-2">
        <Range
          values={[innerValue]}
          onChange={([value]) => setInnerValue(value)}
          onFinalChange={([value]) => onChange(value)}
          renderTrack={({ props, children }) => (
            <div className="w-full h-9" {...props}>
              <div className="w-full h-1 rounded-full bg-gray-300 absolute top-4 overflow-hidden">
                <div
                  className={`absolute h-full right-0 top-0 ${dangerZoneClassName} bg-red-300`}
                />
              </div>
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              className="h-4 w-4 rounded-full bg-blue-500 shadow focus:outline-none focus:bg-blue-700"
              {...props}
            />
          )}
          {...{ min, max, step }}
        />
      </div>
    </label>
  );
};
