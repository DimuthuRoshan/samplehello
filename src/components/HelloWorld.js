import React, {Component} from "react"


class HelloWorld extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h3>Version  1 via CDN</h3>
            </div>
        );
    }
}

HelloWorld.defaultProps = {
};

export default HelloWorld;
