import React, { Component } from 'react';
import Header from '../layout/Header.jsx';
import CategoriesContent from "../layout/CategoriesContent";
import Footer from "../layout/Footer";
import Copyright from "../layout/Copyright";

class Categories extends Component {
    render() {
        return (
            <div className="super_container">
                <div><Header/></div>
                <div><CategoriesContent/></div>
                <div><Footer/></div>
                <div><Copyright/></div>
            </div>
        );
    }
}

export default Categories