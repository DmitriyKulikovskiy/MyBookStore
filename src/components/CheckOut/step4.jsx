import React from "react";

const StepFour = ({ setPayment, payment }) => {
    const error = (error) => {
        return error.length < 1 ? "Field is required" : null;
    };

    return (
        <>
            <div className="step-4">
                <div className="step1">
                    <div className="num">4</div>
                    <div>Payment</div>
                </div>
                <div className="error-type">{error(payment)}</div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="By cash"
                        onChange={(e) => setPayment(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                        By cash
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        value="By card"
                        onChange={(e) => setPayment(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                        By card
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios3"
                        value="GooglePay"
                        onChange={(e) => setPayment(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="gridRadios3">
                        GooglePay
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios4"
                        value="ApplePay"
                        onChange={(e) => setPayment(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="gridRadios4">
                        ApplePay
                    </label>
                </div>
            </div>
        </>
    );
};

export default StepFour;
