import React, { Component } from 'react';

import Navigation from '../components/Navigation.jsx';
import ProductContext from "../AppContext";

class Header extends Component {

    componentDidMount () {
        const { getCategories } = this.context;

        getCategories();

    }
    render() {
        const { categories } = this.context;
            return (
                <header className="header">
                    <nav className="main_nav">
                        <Navigation categories={categories}/>
                    </nav>
                </header>
            );

    }
}
Header.contextType = ProductContext;
export default Header
