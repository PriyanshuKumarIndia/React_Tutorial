import { useState } from "react";
import css from "./App.module.css";
import Buttons from "./components/Buttons";
import InputField from "./components/InputField";

function App() {
  const opt = ["+", "-", "/", "*"];

  const [exp, setExp] = useState("");

  const buttonAction = (event, express, opt) => {
    let val = event.target.value;
    if (val === "." && express.includes(".")) {
      return;
    }
    if (express === "Infinity") {
      clear();
      setExp(val);
      return;
    }
    let str = express.length < 1 ? "" : String(express[express.length - 1]);
    if (opt.includes(val) && opt.includes(str)) {
      express = express.slice(0, -1);
    }
    setExp(express + val);
  };

  const cal = (express) => {
    let val = String(eval(express));
    setExp(val);
  };

  const clear = () => {
    setExp("");
  };

  const del = (express) => {
    setExp(express.slice(0, -1));
  };

  return (
    <>
      <div className={`${css.mainContainer} conatiner`}>
        <InputField exp={exp}></InputField>
        <Buttons
          opt={opt}
          del={del}
          clear={clear}
          express={exp}
          cal={cal}
          buttonAction={buttonAction}
        ></Buttons>
      </div>
    </>
  );
}

export default App;
