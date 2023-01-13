import { ReactElement } from "react";

export interface IConfigs {
  size: number;
  lower: boolean;
  upper: boolean;
  numbers: boolean;
  symbols: boolean;
}

export interface ConfigOptionsProps {
  configs: IConfigs;
  onLengthChange: any;
}

export const ConfigOptions = ({
  configs,
  onLengthChange,
}: ConfigOptionsProps): ReactElement => {
  return (
    <div className="p-6 bg-bgSecondary mt-6 rounded-lg">
      <div className="w-full flex justify-between">
        <p>Character length</p>
        <p className="text-lg text-ternaryText">{configs.size}</p>
      </div>
      <input
        type="range"
        className="w-full py-6"
        min="5"
        max="20"
        value={configs.size}
        onChange={(e: any) => onLengthChange(e.target.value)}
      />
    </div>
  );
};
