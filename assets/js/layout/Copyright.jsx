import React, { Component } from 'react';

class Copyright extends Component {
    render() {
        return (
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start">
                                <div className="copyright_content">
                                    Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script>
                                    All rights reserved | This website is made with <i className="fa fa-heart"
                                                                                        aria-hidden="true"></i> by <a
                                        href="#" target="_blank">Aleksandar & Vladimir</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Copyright