import React, { Component } from 'react';
import AppContext from "../AppContext";
import {NavLink} from "react-router-dom";
import global from "../util/global";

class CategoriesBar extends Component {

    render() {
        const { products } = this.props;
        const { category } = this.props;
        const { sortProducts } = this.context;

        function handleSortNameAsc() {
            const sort = 'name';
            const dir = 'asc';
            sortProducts(sort, dir);
        }
        function handleSortNameDesc() {
            const sort = 'name';
            const dir = 'desc';
            sortProducts(sort, dir);
        }
        function handleSortPriceAsc() {
            const sort = 'price';
            const dir = 'asc';
            sortProducts(sort, dir);
        }
        function handleSortPriceDesc() {
            const sort = 'price';
            const dir = 'desc';
            sortProducts(sort, dir);
        }
        return (
            <div className="shop_bar clearfix">
                <div className="shop_product_count"><p> Kategorija:  <b>{category.name}</b></p><span>{products.length}</span> proizvoda pronadjeno </div>
                <div className="shop_sorting">
                    <span>Sortiranje po:</span>
                    <ul>
                        <li>
                            <span className="sorting_text">Izaberi<i className="fas fa-chevron-down"></i></span>
                            <ul>
                                <li className="shop_sorting_button"
                                    onClick={handleSortNameAsc}>Po Imenu [A-Z]</li>
                                <li className="shop_sorting_button"
                                    onClick={handleSortNameDesc}>Po Imenu [Z-A]</li>
                                <li className="shop_sorting_button"
                                    onClick={handleSortPriceAsc}>Cena Rastuce</li>
                                <li className="shop_sorting_button"
                                    onClick={handleSortPriceDesc}>Cena Opadajuce</li>
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
