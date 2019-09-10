import React, { Component } from 'react';
import ProductContent from "../layout/ProductContent";
import ProductContext from "../ProductContext";

class SingleProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            offers: []
        };
    }
    render() {
        function renderPage({product, offers}) {
            return (
                <div className="super_container">
                    {/*<div><Header/></div>*/}
                    <div><ProductContent product={product} offers={offers}/></div>
                    {/*<div><Footer/></div>*/}
                    {/*<div><Copyright/></div>*/}
                </div>
            );
        }
        return (
            <ProductContext.Consumer>
                {(contextState ) => renderPage(contextState)}
            </ProductContext.Consumer>
        );
    }
}

export default SingleProduct
