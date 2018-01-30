import React, { PureComponent } from 'react';
import { NavBar, Icon } from "antd-mobile";

class CommonHeader extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <NavBar
                    mode="dark"
                    icon={ <Icon type="left" />}
                    onLeftClick={ () => console.log('onLeftClick') }
                    rightContent={ <Icon key="1" type="ellipsis" /> }
                >
                    包罗万象
                </NavBar>
            </React.Fragment>
        )
    }
};

export default CommonHeader;