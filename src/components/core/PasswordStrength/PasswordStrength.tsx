import { ReactElement } from "react";
import { IOptions } from "../ConfigOptions/initialOptionsConfig";

interface IPasswordStrength {
  configs: IOptions[];
}

interface IStrengthTable {
  [key: string]: string;
}

const strengthTable: IStrengthTable = {
  1: "VERY WEAK",
  2: "WEAK",
  3: "MEDIUM",
  4: "HARD",
};

export const PasswordStrength = ({
  configs,
}: IPasswordStrength): ReactElement => {
  const strength = configs.filter((a) => a.value).length;

  return (
    <div className="full flex justify-between py-6">
      <p>STRENGTH</p>
      <div className="flex">
        <p>{strengthTable[strength]}</p>
        {Object.keys(strengthTable).map((value: string, index: number) => {
          if (index < strength)
            return (
              <div
                key={index}
                className="ml-1 w-4 h-8 border-2 border-white bg-yellow-300"
              ></div>
            );
          else
            return (
              <div
                key={index}
                className="ml-1 w-4 h-8 border-2 border-white"
              ></div>
            );
        })}
      </div>
    </div>
  );
};
