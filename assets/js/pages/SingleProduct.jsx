import React, { Component } from 'react';
import Header from '../layout/Header.jsx';
import ProductContent from "../layout/ProductContent";
import Footer from "../layout/Footer";
import Copyright from "../layout/Copyright";

class SingleProduct extends Component {
    render() {
        return (
            <div className="super_container">
                <div><Header/></div>
                <div><ProductContent/></div>
                <div><Footer/></div>
                <div><Copyright/></div>
            </div>
        );
    }
}

export default SingleProduct
