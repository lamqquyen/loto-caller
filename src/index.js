import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from './store'

const Styles = createGlobalStyle`
  @font-face {
      font-family: "Motiva Sans Light";
      src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
      font-style: normal;
  }

  @font-face {
      font-family: "Motiva Sans Bold";
      src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
      font-style: normal;
  }

  @font-face {
      font-family: "Changa";
      src: url("/fonts/Changa-VariableFont_wght.ttf") format("truetype");
      font-style: normal;
  }

  @font-face {
      font-family: "PressStart2P";
      src: url("/fonts/PressStart2P-Regular.ttf") format("truetype");
      font-style: normal;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Styles />
      <Main />
    </React.StrictMode>,
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
