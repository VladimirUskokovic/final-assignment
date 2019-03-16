import React, { Component } from "react";
import Parallax from "../components/Parallax";
import Shop from "../components/Shop";
import Brands from "../components/Brands";

class CategoriesContent extends Component {
    render() {
        return (
            <div>
                <div>
                    <Parallax />
                </div>
                <div>
                    <Shop />
                </div>
                <div>
                    <Brands />
                </div>
            </div>
        );
    }
}

export default CategoriesContent