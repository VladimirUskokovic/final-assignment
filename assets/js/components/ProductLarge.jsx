import React, { Component } from "react";
import global from '../util/global';

class ProductLarge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: `${global.PATH}/images/single_1.jpg`,
      images: [
        `${global.PATH}/images/single_1.jpg`,
        `${global.PATH}/images/single_2.jpg`,
        `${global.PATH}/images/single_3.jpg`
      ]
    }
  }
  setModal(imageKey) {
    this.setState({ image: this.state.images[imageKey] });
  }
  getImage() {
    return this.state.image;
  }
  render() {
    let images = this.state.images.map((val, key) => <li onClick={() => {this.setModal(key)}} key={key}><img src={val} alt=""/></li>);

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 order-lg-1 order-2">
              <ul className="image_list">
                {images}
              </ul>
            </div>
            <div className="col-lg-5 order-lg-2 order-1">
              <div className="image_selected">
                <img src={this.state.image}></img>
                </div>
            </div>
            <div className="col-lg-5 order-3">
               <div className="product_description">
                 {/*<div className="product_category">{this.props.product.category}</div>*/}
                  {/*<div className="product_name">{this.props.product.name}</div>*/}
                  <div className="product_text">
                    <p>
                      {/*{this.props.product.description} */}
                    </p>
                  </div>

                  {/*<div className="product_price">{this.props.product.price}</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductLarge
