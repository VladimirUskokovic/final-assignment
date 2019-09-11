import React, { Component } from 'react';
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import ProductContext from "./AppContext";
import ProductsService from "./services/ProductsService";
import CategoriesService from "./services/CategoriesService";
import ApiMockUp from './utilities/ApiMockUp';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            product: [],
            offers: [],
            categories: [],
            getProduct: this.getProduct.bind(this),
            getProducts: this.getProducts.bind(this),
            getProductsByCategory: this.getProductsByCategory.bind(this),
        };
        this.productService = new ProductsService();
        this.categoriesService = new CategoriesService();
    }

    getProducts() {
        const products = this.productService.getProducts();

        this.setState({products});
    }

    getProduct(productId) {
        const product = this.productService.getProduct(productId);

        this.setState({product});
    }

    getProductsByCategory(categoryId) {
        const products = this.productService.getProductsByCategory(categoryId);

        this.setState({products});
    }

    render() {
        const Component = this.props.component;

        return (
            <div>
                <ProductContext.Provider value={this.state}>
                    <Header/>
                    <Component {...this.props}/>
                    <Footer/>
                </ProductContext.Provider>
            </div>
        );
    }
}

export default Main
