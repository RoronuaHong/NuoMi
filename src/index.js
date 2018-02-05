import React from "react";
import { render } from "react-dom";
import Router from "./routers";
import { createStore } from "redux";
import Count from "./reducers/count";

let stores = createStore(Count);

render(
    <Router />,
    document.getElementById("root")
)