import React from "react";
import "./discount-offer.sass";

const DiscountOffer = ({changeDiscountStatus}) => {
    return (
        <div className="bg-home-page">
            <div className="box-discount">
                <div className="first-line">We offer discount</div>
                <div className="second-line">
                    Special <span>10% off</span>
                </div>
                <div className="third-line">For new customers</div>
                <div className="fourth-line">
                    <button onClick={() => changeDiscountStatus()}>Get the deal</button>
                </div>
            </div>
        </div>
    );
};

export default DiscountOffer;
