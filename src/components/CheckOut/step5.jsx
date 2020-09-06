import React from "react";

const StepFive = ({
    setPoint,
    setHouse,
    setApartment,
    point,
    house,
    apartment,
}) => {
    const error = () => {
        return point.length < 1 || house.length < 1 || apartment.length < 1
            ? "Fields are required"
            : null;
    };
    const classError = (error) => {
        return error.length >= 1 ? "greenB form-control" : "redB form-control";
    };
    return (
        <>
            <div className="step-5">
                <div className="step1">
                    <div className="num">5</div>
                    <div>Delivery point</div>
                </div>
                <form>
                    <div className="error-type">{error()}</div>
                    <div className="form-row">
                        <div className="col-8">
                            <input
                                type="text"
                                className={classError(point)}
                                placeholder="Address"
                                onChange={(e) => setPoint(e.target.value)}
                            />
                        </div>
                        <div className="col-2 flex-element">
                            <input
                                type="text"
                                className={classError(house)}
                                placeholder="House"
                                onChange={(e) => setHouse(e.target.value)}
                            />
                        </div>
                        <div className="col-2 flex-element">
                            <input
                                type="text"
                                className={classError(apartment)}
                                placeholder="Apartment"
                                onChange={(e) => setApartment(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default StepFive;
