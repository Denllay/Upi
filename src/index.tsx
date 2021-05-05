import React from "react";
import ReactDom from "react-dom";
import { App } from "./App";
import "./index.scss";
const root = document.getElementById("root");
const main = <App />;
ReactDom.render(main, root);
