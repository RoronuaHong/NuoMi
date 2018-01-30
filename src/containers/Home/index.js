import React, { PureComponent, Fragment } from "react";
import { withRouter } from "react-router";
import { Button } from "antd-mobile";
import CommonHeader from "../components/CommonHeader";
import Carousels from "../components/Carousels";

class Home extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <CommonHeader title="包罗万象"/>
                <Carousels />
            </React.Fragment>
        )
    }
}

export default withRouter(Home);
