import global from "../util/global";
import React, { Component }  from "react";
class Offer extends Component {
    render() {

        return(
            <li className="cart_item clearfix">
                <div className="cart_item_image"><img src={`${global.PATH}/images/shopping_cart.jpg`} alt=""/></div>
                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                    <div className="cart_item_name cart_info_col">
                        <div className="cart_item_title">Name</div>
                        <div className="cart_item_text">{this.props.name}</div>
                    </div>
                    <div className="cart_item_color cart_info_col">
                        <div className="cart_item_title">Color</div>
                        <div className="cart_item_text"><span style={{backgroundColor:'#999999'}}></span>{this.props.color}
                        </div>
                    </div>
                    <div className="cart_item_quantity cart_info_col">
                        <div className="cart_item_title">Seller</div>
                        <div className="cart_item_text">{this.props.seller}</div>
                    </div>
                    <div className="cart_item_price cart_info_col">
                        <div className="cart_item_title">Price</div>
                        <div className="cart_item_text">{this.props.price}</div>
                    </div>
                </div>
            </li>
        );
    }
}

export default Offer
