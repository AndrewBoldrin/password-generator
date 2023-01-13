import { useState } from "react";
import "./App.css";
import { GeneratedPasswordContainer } from "./components/core/GeneratedPasswordContainer";

function App() {
  const [password, setPassword] = useState<string>("aXbCvv%s");

  return (
    <div className="App w-screen h-screen bg-black flex justify-center items-center">
      <div className="w-96">
        <h1 className="text-secondaryText text-lg mb-5 font-mono text-center">
          Password Generator
        </h1>
        <GeneratedPasswordContainer password={password} />
      </div>
    </div>
  );
}

export default App;
