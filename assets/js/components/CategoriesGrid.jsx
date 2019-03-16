import React, { Component } from 'react';
// import CategoriesProduct from "./CategoriesProduct";
import Product from "./Product";

class CategoriesGrid extends Component {
    render() {
        let products = [];
        for(let i=0; i < 20; i++) {
            products.push(<Product key={i}/>);
        }
        return (
            <div className="product_grid">
                <div className="product_grid_border"></div>
                {products}
            </div>
        );
    }
}
export default CategoriesGrid