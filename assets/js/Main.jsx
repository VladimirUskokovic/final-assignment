import React, { Component } from 'react';
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import ProductContext from "./AppContext";
import ProductsService from "./services/ProductsService";
import CategoriesService from "./services/CategoriesService";
import ApiMockUp from './utilities/ApiMockUp';
import global from "./util/global";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            product: [],
            category: [],
            offers: [],
            categories: [],
            brands: [],
            visible: 4,
            getProduct: this.getProduct.bind(this),
            getProducts: this.getProducts.bind(this),
            getCategory: this.getCategory.bind(this),
            getCategories: this.getCategories.bind(this),
            getBrands: this.getBrands.bind(this),
            getOffers: this.getOffers.bind(this),
            getProductsByBrand: this.getProductsByBrand.bind(this),
            sortAscending: this.sortAscending.bind(this),
            sortDescending: this.sortDescending.bind(this),
            getProductsByCategory: this.getProductsByCategory.bind(this),
            search: this.search.bind(this),
            loadMore: this.loadMore.bind(this)
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
    getCategory(categoryId) {
        const category = this.categoriesService.getCategory(categoryId);

        this.setState({category});
    }
    getCategories() {
        const categories = this.categoriesService.getCategories();

        this.setState({categories});
    }
    getProductsByCategory(categoryId) {
        const products = this.productService.getProductsByCategory(categoryId);
        this.setState({products});
    }
    getProductsByBrand(brandId) {
        const products = this.productService.getProductsByBrand(brandId);

        this.setState({products});
    }
    getBrands() {
        const brands = this.productService.getBrands();

        this.setState({brands});
    }
    getOffers(productId) {
        const offers = this.productService.getOffers(productId);
        this.setState({offers});
    }
    sortAscending() {
        const products = this.productService.getProducts();
        products.sort((a, b) => (a.price - b.price));
        this.setState({ products });
    };
    sortDescending() {
        const products = this.productService.getProducts();
        products.sort((a, b) => (a.price - b.price)).reverse();
        this.setState({ products });
    }
    search(searchInput) {
        const products = this.productService.searchProduct(searchInput);
        this.setState({ products });
    };
    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 4};
        });
    }
        render() {
        const Component = this.props.component;

        return (
            <div>
                <ProductContext.Provider value={this.state}>
                    <Header />
                    <Component {...this.props}/>
                    <Footer/>
                </ProductContext.Provider>
            </div>
        );
    }
}

export default Main