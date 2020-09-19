import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//하나의 컴포넌트만 render할수있다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
