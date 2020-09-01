import React from "react";
import "./company-offers.sass";

const CompanyOffers = () => {
    let text = (
        <p>
            Lorem ipsum dolor sit amet,
            <br className="br" /> consectetur adipiscing elit.
        </p>
    );
    return (
        <div className="offer-container">
            <div className="container">
                <div className="row text-center flex-nowrap">
                    <div className="col-xl-3 offer-box">
                        <i className="fa fa-bus" aria-hidden="true"></i>
                        <div className="offer-text-box">
                            <p>Quick delivery</p>
                            {text}
                        </div>
                    </div>
                    <div className="col-xl-3  offer-box">
                        <i className="fa fa-credit-card" aria-hidden="true"></i>
                        <div className="offer-text-box">
                            <p>Pay with easy</p>
                            {text}
                        </div>
                    </div>
                    <div className="col-xl-3 offer-box">
                        <i className="fa fa-tag" aria-hidden="true"></i>
                        <div className="offer-text-box">
                            <p>Best deal</p>
                            {text}
                        </div>
                    </div>
                    <div className="col-xl-3 offer-box">
                        <i className="fa fa-shield" aria-hidden="true"></i>
                        <div className="offer-text-box">
                            <p>Secured payment</p>
                            {text}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyOffers;
