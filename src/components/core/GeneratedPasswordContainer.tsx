import { ReactElement } from "react";
import { copyToClipboard } from "../../utils/copyToClipboard";

interface IGeneratePasswordContainer {
  password: string;
}

export const GeneratedPasswordContainer = ({
  password,
}: IGeneratePasswordContainer): ReactElement => {
  return (
    <div className="flex bg-bgSecondary w-full px-8 py-4 justify-between rounded-lg">
      <p className="text-primaryText text-2xl">{password}</p>
      <button
        className="text-ternaryText hover:text-ternaryHover text-xl"
        onClick={() => copyToClipboard(password)}
      >
        copy
      </button>
    </div>
  );
};
