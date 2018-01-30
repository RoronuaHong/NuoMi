import React, { PureComponent } from "react";
import { withRouter } from "react-router";

import "../scss/index.scss";
import "../scss/common/reset.css";

class App extends PureComponent {
    state = {
        initDone: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                initDone: true
            });
        }, 1000);
    }

    render() {        
        return (
            <React.Fragment>
                {
                    this.state.initDone ?
                        this.props.children
                        :
                        <div>Loading...</div>
                }
            </React.Fragment>
        )
    }
}

export default withRouter(App);