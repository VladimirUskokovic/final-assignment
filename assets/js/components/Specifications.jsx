import React, { Component } from 'react';
import Sidebar from "./Sidebar";

class Specifications extends Component {

    render() {
        return (
            <div className="specifications">
                <table className="table">
                    <tbody>
                    {this.props.specifications.map((specification, index) => {
                        return (
                            <tr key={index}>
                                <th>{specification.name}</th>
                                <td>{specification.value}</td>
                            </tr>

                        );
                    })}

                    </tbody></table>
            </div>

        );
    }
}


export default Specifications
