import React, {Component} from 'react';
import Menu from './components/Menu';

class App extends Component {
    render () {
        return (
            <div className="container">
                {/* <h1>React Blog!</h1> */}
                <Menu />
            </div>
        );
    }
}

export default App;