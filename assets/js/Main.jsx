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
            product: null,
            category: [],
            offers: [],
            categories: [],
            brands: [],
            visible: 4,
            order: {},
            getProduct: this.getProduct.bind(this),
            getProducts: this.getProducts.bind(this),
            getCategory: this.getCategory.bind(this),
            getCategories: this.getCategories.bind(this),
            getBrands: this.getBrands.bind(this),
            getOffers: this.getOffers.bind(this),
            getProductsByBrand: this.getProductsByBrand.bind(this),
            sortProducts: this.sortProducts.bind(this),
            // sortProducts: this.sortProducts.bind(this),
            // sortAscending: this.sortAscending.bind(this),
            // sortDescending: this.sortDescending.bind(this),
            getProductsByCategory: this.getProductsByCategory.bind(this),
            search: this.search.bind(this),
            loadMore: this.loadMore.bind(this)
        };
        this.productService = new ProductsService();
        this.categoriesService = new CategoriesService();
    }

    getProducts() {

        this.productService.getProducts()
            .then(({items}) => {
                this.setState({products: items});
            });
    }

    getProduct(productId) {
        this.productService
            .getProduct(productId)
            .then(product => {
                this.setState({product});
            });

    }
    getCategory(categoryId) {
        this.categoriesService
            .getCategory(categoryId)
            .then(category => {
                this.setState({category});
            });
        // const category = this.categoriesService.getCategory(categoryId);

        // this.setState({category});
    }
    getCategories() {
        this.categoriesService.getCategories()
            .then(({items}) => {
                this.setState({categories: items});
            });
    }
    getProductsByCategory(categoryId) {
        this.productService.getProductsByCategory(categoryId)
            .then(({items}) => {
                this.setState({products: items, visible: 4});
            });
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
    sortProducts(sort, dir) {
        this.productService.sortProducts(sort, dir)
            .then(({items}) => {
                this.setState({products: items, visible: 4});
            });
    }
    // sortAscending(categoryId, order) {
    //     // this.productService.getProductsByCategory(categoryId)
    //     //     .then(({items}) => {
    //     //         this.setState({products: items, order: order, visible: 4});
    //     //     });
    // };
    // sortDescending() {
    //     const products = this.productService.getProducts();
    //     products.sort((a, b) => (a.price - b.price)).reverse();
    //     this.setState({ products });
    // }
    search(searchInput) {
        this.productService
            .searchProduct(searchInput)
            .then(({items}) => {
                this.setState({products: items, visible: 4});
            });
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
