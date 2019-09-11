import React, { Component } from 'react';
import Header from '../layout/Header.jsx';
import CategoriesContent from "../layout/CategoriesContent";
import Footer from "../layout/Footer";
import Copyright from "../layout/Copyright";
import ProductContext from "../AppContext";

class CategoriesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: []
        };
    }
    render() {
        function renderPage({categories, products}) {
            return (
                <div className="super_container">
                    {/*<div><Header/></div>*/}
                    <div><CategoriesContent products={products} categories={categories}/></div>
                    {/*<div><Footer/></div>*/}
                    {/*<div><Copyright/></div>*/}
                </div>
            );
        }
        return (
            <ProductContext.Consumer>
                {(contextState ) => renderPage(contextState)}
            </ProductContext.Consumer>
        );

    }
}

export default CategoriesPage
