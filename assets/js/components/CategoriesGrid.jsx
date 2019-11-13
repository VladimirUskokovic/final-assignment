import React, { Component } from 'react';
import Product from "./Product";
import AppContext from "../AppContext";
import Search from "./Search";

class CategoriesGrid extends Component {

    render() {

        const { products } = this.props;

        console.log(products);
        const { visible } = this.props;
        return (
            <div className="product_grid">
                <div className="product_grid_border"></div>
                {products && products.slice(0, visible).map(product => (
                    <Product title={product.name} category={product.category.name}
                             price={0} image={product.images[0]}
                             key={product.id} productId={product.id}
                             store={product.store}/>
                ))}
            </div>

        );
    }
}
CategoriesGrid.contextType = AppContext;
export default CategoriesGrid
