import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home.jsx';
import SingleProduct from "./pages/SingleProduct";
import Categories from "./pages/Categories";
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';

class App extends React.Component {
    render() {
      const def = 'client';

        return (
          <BrowserRouter>
              <Switch>
                <Route exact path="client" component={Home}/>
                <Route path="client/product/:product_id" component={SingleProduct}/>
                <Route path="client/category" component={Categories}/>
                // <Route path="/category/:category_id" component={Categories}/>
              </Switch>
          </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
