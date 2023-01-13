import { useState } from "react";
import "./App.css";
import { GeneratedPasswordContainer } from "./components/core/GeneratedPasswordContainer";
import {
  ConfigOptions,
  IConfigs,
} from "./components/core/ConfigOptions/ConfigOptions";

const initialOptionsConfig = {
  size: 10,
  lower: true,
  upper: false,
  numbers: false,
  symbols: false,
};

function App() {
  const [password, setPassword] = useState<string>("aXbCvv%s");
  const [configs, setConfigs] = useState<IConfigs>(initialOptionsConfig);

  const onLengthChange = (newValue: number) => {
    setConfigs({ ...configs, size: newValue });
  };

  return (
    <div className="App w-screen h-screen bg-black flex justify-center items-center">
      <div className="w-96 text-primaryText">
        <h1 className="text-secondaryText text-lg mb-5 font-mono text-center">
          Password Generator
        </h1>
        <GeneratedPasswordContainer password={password} />
        <ConfigOptions configs={configs} onLengthChange={onLengthChange} />
      </div>
    </div>
  );
}

export default App;
