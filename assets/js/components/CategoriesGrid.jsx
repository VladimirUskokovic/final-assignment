import React, { Component } from 'react';
import CategoriesProduct from "./CategoriesProduct";

class CategoriesGrid extends Component {
    render() {
        return (
            <div className="product_grid">
                <div className="product_grid_border"></div>
                <CategoriesProduct/>
            </div>
        );
    }
}
export default CategoriesGrid