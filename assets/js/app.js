import React from 'react';
import ReactDOM from 'react-dom';
//import Home from './pages/Home.jsx';
import SingleProduct from "./pages/SingleProduct";

class App extends React.Component {

    render() {
        return (
            <SingleProduct/>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));