import React, {Component} from "react"
import ReactDOM from 'react-dom';
import HelloWorld from './dist/HelloWorld';
//import HelloWorld from './components/HelloWorld';


class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <HelloWorld/>
            </div>

        );
    }
}

export default App;

ReactDOM.render(<App/>,
    document.querySelector('.container')
);




