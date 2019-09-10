import React, { Component } from "react";
import Parallax from "../components/Parallax";
import Shop from "../components/Shop";
import Brands from "../components/Brands";

class CategoriesContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { products } = this.props;
        const { categories } = this.props;
        return (
            <div>
                <div>
                    <Parallax />
                </div>
                <div>
                    <Shop products={products} categories={categories}/>
                </div>
                <div>
                    <Brands />
                </div>
            </div>
        );
    }
}

export default CategoriesContent
