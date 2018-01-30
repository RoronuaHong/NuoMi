import React from "react";
import { render } from "react-dom";
import Router from "./routers";
import { createStore } from "redux";
import Count from "./reducers";

let stores = createStore(Count);

stores.subscribe(() => {
    console.log(1);
});

stores.dispatch(()=> {
    
});

render(
    <div>
        <div

        >
            -
        </div>
        <div

        >
            +
        </div>
        <Router />
    </div>,
    document.getElementById("root")
)