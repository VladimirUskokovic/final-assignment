import React, { Component }  from 'react';

import Categories from "./Categories";
import MainNav from "./MainNav";

class Navigation extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="main_nav_content d-flex flex-row">
                            <Categories/>
                            <div className="main_nav_menu ml-auto">
                                <MainNav/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation