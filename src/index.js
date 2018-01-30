import React from "react";
import { render } from "react-dom";
import Router from "./routers";
import { createStore } from "redux";
import Count from "./reducers/count";

let stores = createStore(Count);

stores.subscribe(() => {
    console.log(stores.getState()); 
});

stores.dispatch({
    type: "ADD_COUNT"
});

render(
    <div>
        <div
            onClick={() => { 
                stores.dispatch({
                    type: "ADD_COUNT"
                });
            }}
        >
            +
        </div>
        <div
            onClick={() => {
                stores.dispatch({
                    type: "DEL_COUNT"
                });
            }}
        >
            -
        </div>
        <Router />
    </div>,
    document.getElementById("root")
)