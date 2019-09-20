import React, { Component } from 'react';
import Sidebar from "./Sidebar";

class Specifications extends Component {

    render() {
        return (
            <div class="specifications">
                <table className="table">
                    <tbody>
                    <tr>
                        <th>Ram Memorija</th>
                        <td>8GB</td>

                    </tr>
                    <tr>
                        <th>Dijagonala</th>
                        <td>15.6"</td>
                    </tr>
                    <tr>
                        <th>Ekran</th>
                        <td>15.6" HD SVA LED-backlit, anti-glare
                            Rezolucija: 1366 x 768 piksela</td>

                    </tr>
                    <tr>
                        <th>Broj jezgara</th>
                        <td>4</td>
                    </tr>
                    </tbody></table>
            </div>

        );
    }
}


export default Specifications
