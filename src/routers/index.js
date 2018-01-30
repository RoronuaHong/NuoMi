import React from "react";
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";

import App from "../containers";
import Home from "../containers/Home";
import Login from "../containers/Login";
import NotFound from "../containers/ErrorPage/NotFound";

export default class BrowserRouters extends React.PureComponent {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/' exact component={ Home } />
                        <Route path='/login' component={ Login } />
                        <Route component={ NotFound } />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}