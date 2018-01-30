import React, { PureComponent } from 'react';
import { Carousel } from "antd-mobile";

class Carousels extends PureComponent {
    state = {
        data: ["1", "2", "3"],
        imgHeight: "176px"
    }

    componentDidMount() {

        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    render() {
        return (
            <React.Fragment>
                <Carousel
                    autoplay={ false }
                    infinite
                    selectedIndex={ 0 }
                    beforeChange={ (from, to) => console.log(`silde from ${from} to ${to}`) }
                    afterChange={ index => console.log(`silde to`, index) }
                >
                    {
                        this.state.data.map((val, index) => {
                            return (
                                <a
                                    key={index}
                                    href="https://slims.herokuapp.com/"
                                    style={{ display: "inline-block", width: "100%", height: this.state.imgHeight }}
                                >
                                    <img
                                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                        alt=""
                                        style={{ width: "100%", verticalAlign: "bottom" }}
                                        onLoad={() => {
                                            window.dispatchEvent(new Event("resize"));
                                            this.setState({
                                                imgHeight: "auto"
                                            });
                                        }}
                                    />
                                </a>
                            )
                        })
                    }
                </Carousel>
            </React.Fragment>
        )
    }
};

export default Carousels;
