import React, { PureComponent, Fragment } from "react";
import { withRouter } from "react-router";
import { Button } from "antd-mobile";
import CommonHeader from "../components/CommonHeader";

class Home extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <CommonHeader />
                <Button>Start</Button>
            </React.Fragment>
        )
    }
}

export default withRouter(Home);
