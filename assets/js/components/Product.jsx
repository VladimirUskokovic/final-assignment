import React, { Component } from 'react';
import global from '../util/global';
import { NavLink } from 'react-router-dom';

class Product extends Component {
  render() {
    return (
      <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
        <div className="product_image d-flex flex-column align-items-center justify-content-center">
          <img src={this.props.image} alt=""/>
        </div>
        <div className="product_content">

          <div className="product_name">
            <div>
              <NavLink to={`${global.PATH}/client/product/${this.props.productId}`}>
                {this.props.title}
              </NavLink>
            </div>
          </div>
            <div className="product_price discount">od { this.props.offers}  din.</div>
          <div className="product_extras">

            <a className="product_cart_button" href={`${global.PATH}/client/product/${this.props.productId}`}>Uporedite cene</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Product
