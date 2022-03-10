import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { RecoilRoot } from "recoil";
import Layout from "./layout/layout";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Layout>
        <App />
      </Layout>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
