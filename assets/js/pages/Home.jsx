import React, { Component } from 'react';
import Header from '../layout/Header.jsx';
import Content from "../layout/Content";
import Footer from "../layout/Footer";
import Copyright from "../layout/Copyright";

class Home extends Component {
    render() {
        return (
            <div className="super_container">
                <div><Header/></div>
                <div><Content/></div>
                <div><Footer/></div>
                <div><Copyright/></div>
            </div>
        );
    }
}

export default Home
