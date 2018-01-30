import React, { PureComponent } from "react";
import { withRouter } from "react-router";

class NotFound extends PureComponent {
    render() {
        return (
            <div>NotFound</div>
        )
    }
}

export default withRouter(NotFound);