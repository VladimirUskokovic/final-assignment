import React, { Component } from "react";
import global from '../util/global';

class ProductList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="cart_container">
                            <div className="cart_title">Compare prices</div>
                            <div className="cart_items">
                                <ul className="cart_list">
                                    <li className="cart_item clearfix">
                                        <div className="cart_item_image"><img src={`${global.PATH}/images/shopping_cart.jpg`} alt=""/></div>
                                        <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                            <div className="cart_item_name cart_info_col">
                                                <div className="cart_item_title">Name</div>
                                                <div className="cart_item_text">MacBook Air 13</div>
                                            </div>
                                            <div className="cart_item_color cart_info_col">
                                                <div className="cart_item_title">Color</div>
                                                <div className="cart_item_text"><span style={{backgroundColor:'#999999'}}></span>Silver
                                                </div>
                                            </div>
                                            <div className="cart_item_quantity cart_info_col">
                                                <div className="cart_item_title">Seller</div>
                                                <div className="cart_item_text">Gigatron</div>
                                            </div>
                                            <div className="cart_item_price cart_info_col">
                                                <div className="cart_item_title">Price</div>
                                                <div className="cart_item_text">$2000</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="cart_buttons">
                                {/*<button type="button" className="button cart_button_clear">Add to Cart</button>*/}
                                <button type="button" className="button cart_button_checkout">Visit store</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList