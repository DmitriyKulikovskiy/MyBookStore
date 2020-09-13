import React, { useState } from "react";
import "./check-out.sass";
import { NavLink } from "react-router-dom";
import ModalDone from "./modal";
import StepOne from "./step1";
import StepTwo from "./step2";
import StepThree from "./step3";
import StepFive from "./step5";
import StepFour from "./step4";
import ModalError from "./error";

const CheckOut = ({
    shoppingCart,
    removeBookFromShoppingCart,
    chooseDelivery,
    deliveryMethod,
    promoCode,
    addPromoCode,
    makeOrder,
}) => {
    const grouped = Object.values(
        shoppingCart.reduce((acc, n) => {
            (acc[n.title] = acc[n.title] || { ...n, qty: 0 }).qty++;
            return acc;
        }, {})
    );

    const [promo, setPromo] = useState(false);
    const addPromo = () => {
        setPromo(!promo);
    };

    const deliverPrice = () => {
        if (deliveryMethod === "At the post office") {
            return 12.0;
        } else if (deliveryMethod === "By delivery courier") {
            return 20.0;
        } else if (deliveryMethod === "At the department store") {
            return 0.0;
        } else {
            return 0.0;
        }
    };

    const [promoValue, setPromoValue] = useState("");

    const promoSum = (sum) => {
        if (promoCode === "BOOK") {
            let a = (sum / 100) * 10;
            return sum - a;
        } else {
            return sum - 0;
        }
    };

    const totalSum = (
        shoppingCart.reduce((acc, el) => acc + +el.price, 0) + deliverPrice()
    ).toFixed(2);

    //make an order with hooks
    //part 1
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    //part4
    const [payment, setPayment] = useState("");
    //part5
    const [point, setPoint] = useState("");
    const [house, setHouse] = useState("");
    const [apartment, setApartment] = useState("");

    //modal
    const [modalPurchase, setModal] = useState(false);
    const [modalError, setError] = useState(false);

    const toggleModal = () => {
        if (
            name.length === 0 ||
            lastName.length === 0 ||
            phone.length === 0 ||
            city.length === 0 ||
            deliveryMethod.length === 0 ||
            payment.length === 0 ||
            point.length === 0 ||
            house.length === 0 ||
            apartment.length === 0
        ) {
            setError(!modalError);
        } else {
            setModal(!modalPurchase);
            makeOrder(
                name,
                lastName,
                phone,
                city,
                deliveryMethod,
                payment,
                point,
                house,
                apartment,
                promoSum(totalSum).toFixed(2),
                grouped,
                deliverPrice()
            );
        }
    };


    return (
        <>
            {modalError === true ? <ModalError setError={setError} /> : null}
            {modalPurchase === true ? <ModalDone setModal={setModal} /> : null}
            <div className="cart-logo">
                <div className="logo-bg">
                    <p>Ordering Process</p>
                </div>
            </div>
            <div className="container check-out">
                <div className="row">
                    <div className="col-lg-8">
                        <StepOne
                            setName={setName}
                            setLastName={setLastName}
                            setPhone={setPhone}
                            setCity={setCity}
                            name={name}
                            lastName={lastName}
                            phone={phone}
                            city={city}
                        />
                        <StepTwo
                            chooseDelivery={chooseDelivery}
                            deliveryMethod={deliveryMethod}
                        />
                        <StepThree
                            grouped={grouped}
                            removeBookFromShoppingCart={
                                removeBookFromShoppingCart
                            }
                        />
                        <StepFour setPayment={setPayment} payment={payment} />
                        <StepFive
                            setPoint={setPoint}
                            setHouse={setHouse}
                            setApartment={setApartment}
                            point={point}
                            house={house}
                            apartment={apartment}
                        />
                    </div>

                    <div className="col-lg-4">
                        <div className="left-side-out">
                            <div className="promo">
                                <div className="promo-main">
                                    <div>Promo-code</div>
                                    <div
                                        className="btn-promo"
                                        onClick={() => addPromo()}
                                    >
                                        {promo === true ? "Close" : "Add"}
                                    </div>
                                </div>
                                {promo === true ? (
                                    <div className="promo-accept">
                                        <input
                                            type="text"
                                            className={
                                                promoCode === "BOOK"
                                                    ? "form-control greenB"
                                                    : "form-control redB"
                                            }
                                            value={promoValue}
                                            onChange={(e) =>
                                                setPromoValue(e.target.value)
                                            }
                                        />
                                        <button
                                            onClick={() =>
                                                addPromoCode(promoValue)
                                            }
                                        >
                                            Accept
                                        </button>
                                    </div>
                                ) : null}
                            </div>
                            <div className="total">
                                <div className="total-sum">
                                    <div className="total-title">Total sum</div>
                                    <div className="total-price">
                                        <p>{shoppingCart.length} items worth</p>
                                        <p>
                                            {shoppingCart.length >= 1
                                                ? (
                                                      shoppingCart.reduce(
                                                          (acc, el) =>
                                                              +acc + +el.price,
                                                          0
                                                      ) + deliverPrice()
                                                  ).toFixed(2)
                                                : null}
                                            $
                                        </p>
                                    </div>
                                </div>
                                <div className="delivery-price">
                                    <p>Delivery price</p>
                                    <p>{deliverPrice()}$</p>
                                </div>
                                <div
                                    className={
                                        promoCode === "BOOK"
                                            ? "delivery-price"
                                            : "hide"
                                    }
                                >
                                    <p>Discount</p>
                                    <p>-10%</p>
                                </div>
                                <div className="total-sum-payment">
                                    <p>Total</p>
                                    <p className="sum-fz">
                                        {promoSum(totalSum).toFixed(2)}$
                                    </p>
                                </div>
                                <div className="total-bottom">
                                    <button onClick={() => toggleModal()}>
                                        Place an order
                                    </button>
                                    <div className="law">
                                        Orders with the sum over 1000$ without a
                                        passport are not served. Law 3.04[11]
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckOut;
