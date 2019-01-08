import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandboxxxxx</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Hello name="Taro" />
      <Hello name="naomi" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
