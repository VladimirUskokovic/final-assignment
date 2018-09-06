import React, { Component } from 'react';
// import CategoriesProduct from "./CategoriesProduct";
import Product from "./Product";

class CategoriesGrid extends Component {
    render() {
        return (
            <div className="product_grid">
                <div className="product_grid_border"></div>
                <Product/>
            </div>
        );
    }
}
export default CategoriesGrid