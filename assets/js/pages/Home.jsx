import React, { Component } from 'react';
import Content from "../layout/Content";
import ProductContext from "../AppContext";

class Home extends Component {
    componentDidMount () {
      const { getProducts } = this.context;

      getProducts();
    }

    render() {
      const { products } = this.context;
      return (
          <div className="super_container">
              <Content products={products}/>
          </div>
      );
    }
}

Home.contextType = ProductContext;
export default Home;
