import React from "react";
import "./user-page.sass";
import { NavLink } from "react-router-dom";

const UserPage = ({ order }) => {
    return (
        <>
            <div className="user-logo">
                <div className="logo-bg">
                    <p>Your Orders</p>
                </div>
            </div>
            {order.length > 0 ? (
                <>
                    <div className="container">
                        <div className="row data-container">
                            <div className="container">
                                <div className="shopping-header">
                                    <div className="col-5">Goods Info</div>
                                    <div className="col-2">Status</div>
                                    <div className="col-2">Quantity</div>
                                    <div className="col-3">Total</div>
                                </div>
                            </div>
                            {order.map((item, index) => (
                                <>
                                    <div
                                        key={item.id}
                                        className="order-element"
                                    >
                                        <div className="order-number">
                                            Order №{index + 1}
                                        </div>
                                        {item.purchases.map((el) => (
                                            <div className="row" key={el.id}>
                                                <div className="col-lg-5">
                                                    <span className="none">
                                                        Info:
                                                    </span>
                                                    <div className="goods-info">
                                                        <img src={el.image} />
                                                        <div className="title">
                                                            {el.title}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <span className="none">
                                                        Status:
                                                    </span>
                                                    <div className="status">
                                                        <div>is processed</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <span className="none">
                                                        Quantity:
                                                    </span>
                                                    <div className="qty">
                                                        {el.qty}
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <span className="none">
                                                        Price:
                                                    </span>
                                                    <div className="price">
                                                        {el.price * el.qty}$
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="col-lg-12 order-information">
                                        Order information
                                    </div>
                                    <div className="col-lg-6">
                                        <div key={item.id} className="ord">
                                            <div className="order-row">
                                                <p>User:</p>
                                                <p>{item.firstName}</p>
                                                <p>{item.lastName}</p>
                                            </div>
                                            <div className="order-row">
                                                <p>Phone Number:</p>
                                                <p>{item.phone}</p>
                                            </div>
                                            <div className="order-row">
                                                <p>Delivery city:</p>
                                                <p>{item.city},</p>
                                                <p>{item.delivery}</p>
                                            </div>
                                            <div className="order-row">
                                                <p>Delivery address:</p>
                                                <p>{item.address},</p>
                                                <p>{item.apartmentNumber},</p>
                                                <p>{item.houseNumber}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="ord">
                                            <div className="order-row">
                                                <p>Delivery type:</p>
                                                <p>{item.delivery}</p>
                                            </div>
                                            <div className="order-row">
                                                <p>Delivery price:</p>
                                                <p>{item.priceDelivery}$</p>
                                            </div>
                                            <div className="order-row">
                                                <p>Payment:</p>
                                                <p>{item.payment}</p>
                                            </div>
                                            <div className="order-row">
                                                <p>Total sum:</p>
                                                <p className="totalPrice">
                                                    {item.totalPrice}$
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </>
            ) : <div className="container">
            <div className="center-block">
                <div>Your ordering cart is empty.</div>
                <div className="continue-shopping">
                    <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                    ></i>
                    <NavLink to="/Books">Continue Shopping</NavLink>
                </div>
            </div>
        </div>}
        </>
    );
};

export default UserPage;
