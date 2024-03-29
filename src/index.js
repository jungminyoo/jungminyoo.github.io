import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import { ThemeProvider } from "styled-components";
import theme from "theme";
import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ThemeProvider>,
  document.getElementById("root")
);
