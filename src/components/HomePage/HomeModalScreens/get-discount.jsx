import React from "react";
import "./added-to-cart.sass";

const GetDiscount = ({ changeDiscountStatus }) => {
    return (
        <div className="modal-discount-container">
            <div className="container modal-discount-box">
                <i
                    onClick={() => changeDiscountStatus()}
                    className="fa fa-times"
                    aria-hidden="true"
                ></i>
                <div className="title-discount">Get 10% Off</div>
                <div className="description-discount">
                    <p>Make a purchase for at least 50$ and get a discount</p>
                </div>
                <div className="code">Enter this code</div>
                <div className="discount-code">BOOK</div>
            </div>
        </div>
    );
};

export default GetDiscount;
