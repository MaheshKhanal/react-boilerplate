import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/Main/App";
import "./index.css";
import { RecoilRoot } from "recoil";
import Layout from "./layout/layout";
import Test from "./pages/Page2/test-app";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} exact></Route>
            <Route path="/page2" element={<Test />} exact></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
