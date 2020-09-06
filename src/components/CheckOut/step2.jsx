import React from "react";

const StepTwo = ({ chooseDelivery,deliveryMethod }) => {
    const error = (error) => {
        return error.length < 1 ? "Field is required" : null;
    };

    return (
        <>
            <div className="step-2">
                <div className="step1">
                    <div className="num">2</div>
                    <div>Delivery methods</div>
                </div>
                <div className="error-type">{error(deliveryMethod)}</div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="At the post office"
                        onChange={(e) => chooseDelivery(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                        At the post office
                    </label>
                    <span>+ 12$</span>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        value="By delivery courier"
                        onChange={(e) => chooseDelivery(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                        By delivery courier
                    </label>
                    <span>+ 20$</span>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios3"
                        value="At the department store"
                        onChange={(e) => chooseDelivery(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="gridRadios3">
                        At the department store
                    </label>
                    <span>+ 0$</span>
                </div>
            </div>
        </>
    );
};

export default StepTwo;
