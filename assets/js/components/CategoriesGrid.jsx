import React, { Component } from 'react';
import Product from "./Product";
import AppContext from "../AppContext";
import Search from "./Search";

class CategoriesGrid extends Component {

    render() {

        const { products } = this.props;
        const { visible } = this.props;
        // const prices = [];

        // let oddSquareRoots = products && products.map((product) => {
        //     return prices.push(product)
        //
        // });
        // console.log(oddSquareRoots);
        return (

            <div className="product_grid">
                <div className="product_grid_border"></div>
                {products && products.slice(0, visible).map(product => (
                    <Product title={product.name} category={product.category.name}
                             price={0} image={product.images[0]}
                             key={product.id} productId={product.id}
                             store={product.store} offers={product.offers[0].price}
                    />
                ))};
                {/*{products && products.slice(0, visible).map(({product, offers}, i) => {*/}
                    {/*return <Product title={product.name} category={product.category.name}*/}
                            {/*price={0} image={product.images[0]}*/}
                            {/*key={i}  productId={product.id}*/}
                            {/*store={product.store} offers={product.offers[0].price}*/}
                            {/*{offers.map((offer, j) => {*/}
                                {/*return <p key={j}>{Math.min.apply(null, offer.price)}</p>*/}
                            {/*})}*/}
                     {/*/>*/}
                {/*})};*/}
            </div>

        );
    }
}
CategoriesGrid.contextType = AppContext;
export default CategoriesGrid
