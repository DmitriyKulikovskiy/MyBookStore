import React from "react";
import "./sale.sass";

const SaleComponent = () => {
    return (
        <>
            <div className="container text-center discount-offer-container">
                <div className="prt1">We offer discount</div>
                <div className="prt2">
                    Special <span>10% off</span>
                </div>
                <div className="prt3">For new customers</div>

                <div className="title">
                    <p>Make a purchase for at least 50$ and get a discount</p>
                </div>
                <div className="enter">Enter this code</div>
                <div className="promo-code">BOOK</div>
            </div>
        </>
    );
};

export default SaleComponent;
