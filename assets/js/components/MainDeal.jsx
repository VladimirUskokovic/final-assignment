import React, { Component } from 'react';

class MainDeal extends Component {
    render() {
        return (
            <div className="deals_slider_container">
                <div className="owl-carousel owl-theme deals_slider">
                    <div className="owl-item deals_item">
                        <div className="deals_image"><img src="images/deals.png" alt=""/></div>
                        <div className="deals_content">
                            <div className="deals_info_line d-flex flex-row justify-content-start">
                                <div className="deals_item_category"><a href="#">Headphones</a></div>
                                 <div className="deals_item_price_a ml-auto">$300</div>
                            </div>
                            <div className="deals_info_line d-flex flex-row justify-content-start">
                                <div className="deals_item_name">Beoplay H7</div>
                                <div className="deals_item_price ml-auto">$225</div>
                            </div>
                            <div className="available">
                                <div className="available_line d-flex flex-row justify-content-start">
                                    <div className="available_title">Available: <span>6</span></div>
                                    <div className="sold_title ml-auto">Already sold: <span>28</span></div>
                                </div>
                                <div className="available_bar"><span style={{ width: '17%' }}></span></div>
                            </div>
                            <div className="deals_timer d-flex flex-row align-items-center justify-content-start">
                                <div className="deals_timer_title_container">
                                    <div className="deals_timer_title">Hurry Up</div>
                                    <div className="deals_timer_subtitle">Offer ends in:</div>
                                </div>
                                <div className="deals_timer_content ml-auto">
                                    <div className="deals_timer_box clearfix" data-target-time="">
                                        <div className="deals_timer_unit">
                                            <div id="deals_timer1_hr" className="deals_timer_hr"></div>
                                            <span>hours</span>
                                        </div>
                                        <div className="deals_timer_unit">
                                            <div id="deals_timer1_min" className="deals_timer_min"></div>
                                            <span>mins</span>
                                        </div>
                                        <div className="deals_timer_unit">
                                            <div id="deals_timer1_sec" className="deals_timer_sec"></div>
                                            <span>secs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-item deals_item">
                        <div className="deals_image"><img src="images/deals.png" alt=""/></div>
                        <div className="deals_content">
                            <div className="deals_info_line d-flex flex-row justify-content-start">
                                <div className="deals_item_category"><a href="#">Headphones</a></div>
                                <div className="deals_item_price_a ml-auto">$300</div>
                            </div>
                            <div className="deals_info_line d-flex flex-row justify-content-start">
                                <div className="deals_item_name">Beoplay H7</div>
                                <div className="deals_item_price ml-auto">$225</div>
                            </div>
                            <div className="available">
                                <div className="available_line d-flex flex-row justify-content-start">
                                    <div className="available_title">Available: <span>6</span></div>
                                    <div className="sold_title ml-auto">Already sold: <span>28</span></div>
                                </div>
                                <div className="available_bar"><span style={{ width: '17%' }}></span></div>
                            </div>
                            <div className="deals_timer d-flex flex-row align-items-center justify-content-start">
                                <div className="deals_timer_title_container">
                                    <div className="deals_timer_title">Hurry Up</div>
                                    <div className="deals_timer_subtitle">Offer ends in:</div>
                                </div>
                                <div className="deals_timer_content ml-auto">
                                    <div className="deals_timer_box clearfix" data-target-time="">
                                        <div className="deals_timer_unit">
                                            <div id="deals_timer2_hr" className="deals_timer_hr"></div>
                                            <span>hours</span>
                                        </div>
                                        <div className="deals_timer_unit">
                                            <div id="deals_timer2_min" className="deals_timer_min"></div>
                                            <span>mins</span>
                                        </div>
                                        <div className="deals_timer_unit">
                                            <div id="deals_timer2_sec" className="deals_timer_sec"></div>
                                                <span>secs</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item deals_item">
                            <div className="deals_image"><img src="images/deals.png" alt=""/></div>
                            <div className="deals_content">
                                <div className="deals_info_line d-flex flex-row justify-content-start">
                                    <div className="deals_item_category"><a href="#">Headphones</a></div>
                                    <div className="deals_item_price_a ml-auto">$300</div>
                                </div>
                                <div className="deals_info_line d-flex flex-row justify-content-start">
                                    <div className="deals_item_name">Beoplay H7</div>
                                    <div className="deals_item_price ml-auto">$225</div>
                                </div>
                                <div className="available">
                                    <div className="available_line d-flex flex-row justify-content-start">
                                        <div className="available_title">Available: <span>6</span></div>
                                        <div className="sold_title ml-auto">Already sold: <span>28</span></div>
                                    </div>
                                    <div className="available_bar"><span style={{ width: '17%' }}></span></div>
                                </div>
                                <div className="deals_timer d-flex flex-row align-items-center justify-content-start">
                                <div className="deals_timer_title_container">
                                    <div className="deals_timer_title">Hurry Up</div>
                                    <div className="deals_timer_subtitle">Offer ends in:</div>
                                </div>
                                <div className="deals_timer_content ml-auto">
                                    <div className="deals_timer_box clearfix" data-target-time="">
                                        <div className="deals_timer_unit">
                                            <div id="deals_timer3_hr" className="deals_timer_hr"></div>
                                            <span>hours</span>
                                        </div>
                                        <div className="deals_timer_unit">
                                            <div id="deals_timer3_min" className="deals_timer_min"></div>
                                            <span>mins</span>
                                        </div>
                                        <div className="deals_timer_unit">
                                            <div id="deals_timer3_sec" className="deals_timer_sec"></div>
                                            <span>secs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="deals_slider_nav_container">
                    <div className="deals_slider_prev deals_slider_nav"><i
                        className="fas fa-chevron-left ml-auto"></i></div>
                    <div className="deals_slider_next deals_slider_nav"><i
                        className="fas fa-chevron-right ml-auto"></i></div>
                </div>
            </div>
        );
    }
}

export default MainDeal