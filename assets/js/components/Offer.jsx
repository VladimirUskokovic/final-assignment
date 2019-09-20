import global from "../util/global";
import React, { Component }  from "react";
class Offer extends Component {
    render() {

        return(
            <li className="cart_item clearfix">
                <div className="cart_item_image"><img src={this.props.image} alt=""/></div>
                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                    <div className="cart_item_seller cart_info_col">
                        <div className="cart_item_title">Prodavnica</div>
                        <div className="cart_item_text">{this.props.seller}</div>
                    </div>
                    <div className="cart_item_color cart_info_col">
                        <div className="cart_item_title">Na stanju</div>
                        <div className="cart_item_text"><span style={{backgroundColor:'#00990b'}}></span>{this.props.color}
                        </div>
                    </div>

                    <div className="cart_item_price cart_info_col">
                        <div className="cart_item_title">Cena</div>
                        <div className="cart_item_text">{this.props.price} din.</div>
                    </div>
                    <div className="cart_item_update cart_info_col">
                        <div className="cart_item_title">Azurirano</div>
                        <div className="cart_item_text">Juce uvece</div>
                    </div>
                    <div className="cart_item_button cart_info_col">
                        <button type="button" className="button cart_button_checkout">Posetite prodavnicu</button>
                    </div>

                </div>
            </li>
        );
    }
}

export default Offer
