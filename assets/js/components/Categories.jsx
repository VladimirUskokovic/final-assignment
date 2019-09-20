import React, { Component }  from 'react';

class Categories extends Component {
    render() {
        return (
            <div className="cat_menu_container">
                <div
                    className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                    <div className="cat_burger">
                        <span></span><span></span><span></span>
                    </div>
                    <div className="cat_menu_text">
                        Kategorije
                    </div>
                </div>
                <ul className="cat_menu">
                    <li>
                        <a href="#">{this.props.category}
                            <i className="fas fa-chevron-right ml-auto"></i>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Categories
