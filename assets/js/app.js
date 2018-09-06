import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home.jsx';
// import SingleProduct from "./pages/SingleProduct";
import Categories from "./pages/Categories";

class App extends React.Component {
    render() {
        return (
            <Home/>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));