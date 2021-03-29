import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "app/App";
import { Problem } from "logic/problem";
import { Individual } from "logic/individual";

declare global {
  interface Window {
    __isRunning: boolean;
    __drawBoard: (problem: Problem) => void;
    __drawIndividual: (individual: Individual, problem: Problem) => void;
    __updateGeneration: (number: number) => void;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
