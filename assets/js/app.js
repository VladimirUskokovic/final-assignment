import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home.jsx';
import SingleProduct from "./pages/SingleProduct";
import Categories from "./pages/Categories";
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';

class App extends React.Component {
    render() {
      const DEV_PATH = '/final-assignment/public/client';
      const PATH = '/client';
      const DEV = true;

        return (
          <BrowserRouter>
              <Switch>
                <Route exact path={DEV ? DEV_PATH : PATH} component={Home}/>
                <Route path={`${DEV ? DEV_PATH : PATH}/product/:product_id`} component={SingleProduct}/>
                <Route path={`${DEV ? DEV_PATH : PATH}/category/:category_id`} component={Categories}/>
              </Switch>
          </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
