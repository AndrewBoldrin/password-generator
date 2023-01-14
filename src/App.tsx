import { useState } from "react";
import "./App.css";
import { GeneratedPasswordContainer } from "./components/core/GeneratedPasswordContainer";
import { ConfigOptions } from "./components/core/ConfigOptions/ConfigOptions";
import {
  initialOptionsConfig,
  IOptions,
} from "./components/core/ConfigOptions/initialOptionsConfig";
import { shuffle } from "./utils/shuffle";

function App() {
  const [password, setPassword] = useState<string>("aXbCvv%s");
  const [passwordLength, setPasswordLength] = useState<string>("10");
  const [configs, setConfigs] = useState<IOptions[]>(initialOptionsConfig);

  const onConfigsChange = (newValue: any, newOptionIndex: number) => {
    let newConfig = configs.map((value, index) => {
      if (newOptionIndex === index) return newValue;
      return value;
    });
    setConfigs(newConfig);
  };

  const generatePassword = () => {
    const numberPerGroup = Math.trunc(Number(passwordLength) / configs.length);
    var tempPassword = "";
    var allSelectedChars = "";

    configs.forEach((options: IOptions) => {
      if (options.value) {
        tempPassword += options.chars.slice(0, numberPerGroup);
        allSelectedChars += options.chars;
      }
    });

    const numberOfCharToCompletePassword =
      Number(passwordLength) - tempPassword.length;
    const workingChars = allSelectedChars.slice(
      0,
      numberOfCharToCompletePassword
    );
    setPassword(shuffle(tempPassword + workingChars));
  };

  return (
    <div className="App w-screen h-screen bg-black flex justify-center items-center">
      <div className="w-96 text-primaryText">
        <h1 className="text-secondaryText text-lg mb-5 font-mono text-center">
          Password Generator
        </h1>
        <GeneratedPasswordContainer password={password} />
        <ConfigOptions
          configs={configs}
          onConfigsChange={onConfigsChange}
          passwordLength={passwordLength}
          onPasswordLengthChange={setPasswordLength}
          onGeneratePassword={generatePassword}
        />
      </div>
    </div>
  );
}

export default App;
