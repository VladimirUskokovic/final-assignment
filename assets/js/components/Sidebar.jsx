import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="shop_sidebar">
                <div className="sidebar_section">
                    <div className="sidebar_title">Categories</div>
                    <ul className="sidebar_categories">
                        <li><a href="#">Computers & Laptops</a></li>
                        <li><a href="#">Cameras & Photos</a></li>
                        <li><a href="#">Hardware</a></li>
                        <li><a href="#">Smartphones & Tablets</a></li>
                        <li><a href="#">TV & Audio</a></li>
                        <li><a href="#">Gadgets</a></li>
                        <li><a href="#">Car Electronics</a></li>
                        <li><a href="#">Video Games & Consoles</a></li>
                        <li><a href="#">Accessories</a></li>
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