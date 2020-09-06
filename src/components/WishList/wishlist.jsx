import React from "react";
import "./wishlist.sass";
import { SetRating } from "../../assets/rating/rating";
import { NavLink } from "react-router-dom";

const WishList = ({ wishList, removeBookFromWishList }) => {
    return (
        <>
            <div className="wishlist-logo">
                <div className="logo-bg">
                    <p>Your WishList</p>
                </div>
            </div>
            {wishList.length >= 1 ? (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="container">
                                <div className="shopping-header">
                                    <div className="col-1"></div>
                                    <div className="col-2">Title</div>
                                    <div className="col-2">Genre</div>
                                    <div className="col-2">Price</div>
                                    <div className="col-2">Rating</div>
                                    <div className="col-2">Details</div>
                                </div>
                            </div>
                            {wishList.map((el) => (
                                <div key={el.id} className="wish-element">
                                    <div className="col-lg-1">
                                        <img src={el.image}></img>
                                    </div>
                                    <div className="col-lg-2">
                                        <p>
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
                                    <div className="col-lg-2">
                                        <p>
                                            {" "}
                                            <span className="none">Price:</span>
                                            {el.price}$
                                        </p>
                                    </div>
                                    <div className="col-lg-2">
                                        <p>
                                            {" "}
                                            <span className="none">
                                                Rating:
                                            </span>
                                            <SetRating rating={el.rating} />
                                        </p>
                                    </div>
                                    <div className="col-lg-2">
                                        <p>
                                            <span className="none">
                                                Details:
                                            </span>
                                            <NavLink to={"Book/" + el.id}>
                                                View Details
                                            </NavLink>
                                        </p>
                                    </div>
                                    <div className="col-lg-1">
                                        <p>
                                            <span className="none">
                                                Remove:
                                            </span>
                                            <i
                                                onClick={() =>
                                                    removeBookFromWishList(
                                                        el.id
                                                    )
                                                }
                                                className="fa fa-times"
                                                aria-hidden="true"
                                            ></i>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="center-block">
                        <div>Your wishlist is empty.</div>
                        <div className="continue-shopping">
                            <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                            ></i>
                            <NavLink to="/Books">Continue Shopping</NavLink>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default WishList;
