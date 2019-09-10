import React, { Component } from 'react';
import Offer from "./ProductList";

class Sidebar extends Component {
    render() {
        const { categories } = this.props;
        return (
            <div className="shop_sidebar">
                <div className="sidebar_section">
                    <div className="sidebar_title">Categories</div>
                    <ul className="sidebar_categories">
                        {categories.map(category => (
                            <li key={category.id}>
                                <a href="#">{category.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sidebar_section">
                    <div className="sidebar_subtitle brands_subtitle">Brands</div>
                    <ul className="brands_list">
                        <li className="brand"><a href="#">Apple</a></li>
                        <li className="brand"><a href="#">Beoplay</a></li>
                        <li className="brand"><a href="#">Google</a></li>
                        <li className="brand"><a href="#">Meizu</a></li>
                        <li className="brand"><a href="#">OnePlus</a></li>
                        <li className="brand"><a href="#">Samsung</a></li>
                        <li className="brand"><a href="#">Sony</a></li>
                        <li className="brand"><a href="#">Xiaomi</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Sidebar
