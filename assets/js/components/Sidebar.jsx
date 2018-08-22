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
                <div className="sidebar_section filter_by_section">
                    <div className="sidebar_title">Filter By</div>
                    <div className="sidebar_subtitle">Price</div>
                    <div className="filter_price">
                        <div id="slider-range" className="slider_range"></div>
                        <p>Range: </p>
                        <p><input type="text" id="amount" className="amount" readOnly
                                  style={{border:'0', fontWeight:'bold'}}/></p>
                    </div>
                </div>
                <div className="sidebar_section">
                    <div className="sidebar_subtitle color_subtitle">Color</div>
                    <ul className="colors_list">
                        <li className="color"><a href="#" style={{background: '#b19c83'}}></a></li>
                        <li className="color"><a href="#" style={{background: '#000000'}}></a></li>
                        <li className="color"><a href="#" style={{background: '#999999'}}></a></li>
                        <li className="color"><a href="#" style={{background: '#0e8ce4'}}></a></li>
                        <li className="color"><a href="#" style={{background: '#df3b3b'}}></a></li>
                        <li className="color"><a href="#"
                                                 style={{background: '#ffffff', border: 'solid 1px #e1e1e1'}}></a></li>
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