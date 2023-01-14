import { useEffect, useState } from "react";
import "./App.css";
import { GeneratedPasswordContainer } from "./components/core/GeneratedPasswordContainer";
import { ConfigOptions } from "./components/core/ConfigOptions/ConfigOptions";
import {
  initialOptionsConfig,
  IOptions,
} from "./components/core/ConfigOptions/initialOptionsConfig";

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
        />
      </div>
    </div>
  );
}

export default App;
