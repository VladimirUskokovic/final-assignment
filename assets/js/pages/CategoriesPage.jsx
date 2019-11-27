import React, { Component } from 'react';
import CategoriesContent from "../layout/CategoriesContent";
import ProductContext from "../AppContext";
import ProductsService from "../services/ProductsService";
import CategoriesService from "../services/CategoriesService";

class CategoriesPage extends Component {

    componentDidUpdate(prevProps) {
        const categoryId = parseInt(this.props.match.params.categoryId);
        const prevCategoryId = parseInt(prevProps.match.params.categoryId);
        // const order =  this.context;
        const { visible } = this.context;
        if (prevCategoryId !== categoryId) {

            const { getProductsByCategory } = this.context;
            const { getCategory } = this.context;
            // const { sortProducts } = this.context;

            getProductsByCategory(categoryId);
            getCategory(categoryId);
            // sortProducts();

        }
    }
    componentDidMount () {
        const categoryId = parseInt(this.props.match.params.categoryId);
        const { getProductsByCategory } = this.context;
        const { getCategory } = this.context;
        // const { sortProducts } = this.context;

        getProductsByCategory(categoryId);
        getCategory(categoryId);
        // sortProducts();
    }
    render() {

        const { products, categories, category } = this.context;
            return (
                <div className="super_container">
                    {/*<div><Header/></div>*/}
                    <div><CategoriesContent products={products} categories={categories} category={category}/></div>
                    {/*<div><Footer/></div>*/}
                    {/*<div><Copyright/></div>*/}
                </div>
            );
    }
}

CategoriesPage.contextType = ProductContext;
export default CategoriesPage
