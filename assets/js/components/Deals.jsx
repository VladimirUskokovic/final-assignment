import React, { Component }  from 'react';
import Product from "./Product";

class Deals extends Component {
    render() {

        let products = [];
        for(let i=0; i < 20; i++) {
            products.push(<Product key={i}/>);
        }


        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="featured">
                          {products}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Deals
