import React, { Component } from 'react';
import AppContext from "../AppContext";
import CategoriesPage from "../pages/CategoriesPage";

class CategoriesBar extends Component {

    render() {
        const { products } = this.props;
        const { category } = this.props;
        return (
            <div className="shop_bar clearfix">
                <div className="shop_product_count"><p> Kategorija:  <b>{category.categoryTitle}</b></p><span>{products.length}</span> proizvoda pronadjeno </div>
                <div className="shop_sorting">
                    <span>Sortiranje po:</span>
                    <ul>
                        <li>
                            <span className="sorting_text">Izaberi<i className="fas fa-chevron-down"></i></span>
                            <ul>
                                <li className="shop_sorting_button"
                                    onClick={this.context.sortAscending}>Cena Rastuce</li>
                                <li className="shop_sorting_button"
                                    onClick={this.context.sortDescending}>Cena Opadajuce</li>
                                <li className="shop_sorting_button">Po Imenu [A-Z]</li>
                                <li className="shop_sorting_button">Po Imenu [Z-A]</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
CategoriesBar.contextType = AppContext;
export default CategoriesBar
