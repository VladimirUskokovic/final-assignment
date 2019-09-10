import React, { Component } from 'react';
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import ProductContext from "./ProductContext";
import ProductsService from "./services/ProductsService";
import CategoriesService from "./services/CategoriesService";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            product: [],
            offers: [],
            categories: []
        };
        this.productService = new ProductsService();
        this.categoriesService = new CategoriesService();
    }
    componentDidMount() {
        // const { id } = this.props.match.params;
        const products = this.productService.getProducts();
        this.setState({products});
        // ProductsService.getProducts()
            // .then(({products}) => this.setState({products}))
            // .catch(error => console.error('Error:', error));
        // ProductsService.getProduct(id)
        //     .then((product) => this.setState({product}))
        //     .catch(error => console.error('Error:', error));
        // ProductsService.getOffers(id)
        //     .then(({offers}) => this.setState({offers}))
        //     .catch(error => console.error('Error:', error));
        const categories = this.categoriesService.getCategories();
        this.setState({categories});
        // CategoriesService.getCategories()
        //     .then(({categories}) => this.setState({categories}))
        //     .catch(error => console.error('Error:', error));
    }

    render() {
        const Component = this.props.component;

        return (
            <div>
                <ProductContext.Provider value={this.state}>
                    <Header/>
                        <Component match={this.props.match}/>
                    <Footer/>
                </ProductContext.Provider>
            </div>
        );
    }
}

export default Main
