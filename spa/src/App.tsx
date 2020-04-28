import React from "react";
import "./App.css";
import run from "./run";

const App = () => {
  document.addEventListener("DOMContentLoaded", run);
  return <div>Hello TensorFlow</div>;
};

export default App;
