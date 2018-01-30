import React, { PureComponent, Fragment } from "react";
import { withRouter } from "react-router";
import { Button } from "antd-mobile";

class Home extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <React.Fragment>
                <Button>Start</Button>
            </React.Fragment>
        )
    }
}

export default withRouter(Home);
