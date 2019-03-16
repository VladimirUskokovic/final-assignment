import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home.jsx';
import SingleProduct from "./pages/SingleProduct";
import Categories from "./pages/Categories";
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import global from './util/global';

class App extends React.Component {
  render() {
    console.log(global);
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path={`${global.REACT_PATH}`} component={Home}/>
            <Route path={`${global.REACT_PATH}/product/:product_id`} component={SingleProduct}/>
            <Route path={`${global.REACT_PATH}/category/:category_id`} component={Categories}/>
          </Switch>
        </BrowserRouter>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
