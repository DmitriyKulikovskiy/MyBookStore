import React from "react";
import { NavLink } from "react-router-dom";

const StepThree = ({ grouped, removeBookFromShoppingCart }) => {
    return (
        <>
            <div className="step-3">
                <div className="step1">
                    <div className="num">3</div>
                    <div>Your purchases</div>
                </div>
                <div className="shopping-header">
                    <div className="col-1"></div>
                    <div className="col-4">Title</div>
                    <div className="col-2">Genre</div>
                    <div className="col-1">Price</div>
                    <div className="col-1">Quantity</div>
                    <div className="col-2">Details</div>
                </div>
                {grouped.map((el) => (
                    <div key={el.id} className="wish-element">
                        <div className="col-lg-1">
                            <img src={el.image}></img>
                        </div>
                        <div className="col-lg-4">
                            <p className="title-none">
                                <span className="none">Title:</span>
                                {el.title}
                            </p>
                        </div>
                        <div className="col-lg-2">
                            <p>
                                <span className="none">Genre:</span>
                                {el.genre}
                            </p>
                        </div>
                        <div className="col-lg-1">
                            <p>
                                {" "}
                                <span className="none">Price:</span>
                                {el.price * el.qty}$
                            </p>
                        </div>
                        <div className="col-lg-1 quantity-out">
                            <p>
                                <span className="none">Quantity:</span>
                                {el.qty}
                            </p>
                        </div>
                        <div className="col-lg-2">
                            <p>
                                <span className="none">Details:</span>
                                <NavLink to={"Book/" + el.id}>
                                    View Details
                                </NavLink>
                            </p>
                        </div>
                        <div className="col-lg-1">
                            <p>
                                <span className="none">Remove:</span>
                                <i
                                    onClick={() =>
                                        removeBookFromShoppingCart(el.id)
                                    }
                                    className="fa fa-times"
                                    aria-hidden="true"
                                ></i>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default StepThree;
