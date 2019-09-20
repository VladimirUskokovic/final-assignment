import React, { Component } from 'react';
import Product from "./Product";
import AppContext from "../AppContext";
import Search from "./Search";

class CategoriesGrid extends Component {

    render() {

        const { products } = this.props;
        const { visible } = this.props;
        return (
            <div className="product_grid">
                <div className="product_grid_border"></div>
                {products && products.slice(0, visible).map(product => (
                    <Product title={product.title} category={product.category}
                             price={product.price} image={product.image}
                             key={product.productId} productId={product.productId}
                             store={product.store}/>
                ))}
            </div>

        );
    }
}
CategoriesGrid.contextType = AppContext;
export default CategoriesGrid
