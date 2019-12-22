import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home.jsx';
import SingleProduct from "./pages/SingleProduct";
import CategoriesPage from "./pages/CategoriesPage";
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import global from './util/global';
import Main from "./Main";

class App extends React.Component {
  render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path={`${global.REACT_PATH}`} render={() => <Main component={Home}/>}/>
            <Route path={`${global.REACT_PATH}/product/:id`} render={(props) => <Main component={SingleProduct} {...props} />}/>
            <Route path={`${global.REACT_PATH}/category/:categoryId`} render={(props) => <Main component={CategoriesPage} {...props} />}/>
          </Switch>
        </BrowserRouter>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
