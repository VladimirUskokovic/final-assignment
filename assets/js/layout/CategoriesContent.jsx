import React, { Component } from "react";
import Parallax from "../components/Parallax";
import Shop from "../components/Shop";
import Brands from "../components/Brands";

class CategoriesContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { products, categories, category } = this.props;
        return (
            <div>
                <div>
                    <Shop products={products} categories={categories} category={category} />
                </div>
                <div>
                    <Brands />
                </div>
            </div>
        );
    }
}

export default CategoriesContent
