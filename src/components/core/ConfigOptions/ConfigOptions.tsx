import React, { ReactElement } from "react";
import { IOptions } from "./initialOptionsConfig";

export interface ConfigOptionsProps {
  configs: IOptions[];
  onConfigsChange: (newValue: IOptions, index: number) => void;
  passwordLength: string;
  onPasswordLengthChange: (password: string) => void;
  onGeneratePassword: () => void;
}

export const ConfigOptions = ({
  configs,
  onConfigsChange,
  passwordLength,
  onPasswordLengthChange,
  onGeneratePassword,
}: ConfigOptionsProps): ReactElement => {
  return (
    <div className="p-6 bg-bgSecondary mt-6 rounded-lg">
      <div className="w-full flex items-center justify-between">
        <label>Character Length</label>
        <label>{passwordLength}</label>
      </div>
      <input
        className="py-6 w-full"
        type="range"
        min="5"
        max="15"
        value={passwordLength}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onPasswordLengthChange(e.target.value)
        }
      />
      {configs.map((options: IOptions, index: number) => {
        return (
          <div key={index}>
            <div className="w-full flex items-center">
              <input
                className="w-6 h-6 my-2 mr-4"
                type={options.type}
                disabled={options.name === "lower" && true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onConfigsChange({ ...options, value: !options.value }, index)
                }
              />
              <label>{options.label}</label>
            </div>
          </div>
        );
      })}
      <button
        className="mt-6 py-3 w-full text-2xl font-semibold text-black bg-ternaryText hover:bg-ternaryHover rounded-md"
        onClick={onGeneratePassword}
      >
        Generate
      </button>
    </div>
  );
};
