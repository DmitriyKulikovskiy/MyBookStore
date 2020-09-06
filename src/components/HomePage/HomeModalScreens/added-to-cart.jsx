import React from "react";
import "./added-to-cart.sass";
import { NavLink } from "react-router-dom";

const AddedToCart = ({
    cartModalBook,
    shoppingCart,
    changeStatusCartModal,
}) => {
    return (
        <div className="modal-cart-container">
            <div className="container modal-cart-box">
                <div className="modal-title">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    Product successfully added to your Shopping Cart
                </div>
                <div className="modal-book-description">
                    <img src={cartModalBook.image} />
                    <div className="description-container">
                        <div className="description box">
                            <p className="title">{cartModalBook.title}</p>
                            <p className="author">{cartModalBook.author}</p>
                            <p className="price">
                                Price: {cartModalBook.price}$
                            </p>
                        </div>
                    </div>
                    <div className="modal-total-items">
                        {`There are ${shoppingCart.length} items in your cart`}
                    </div>
                    <div className="total-price">
                        <p>
                            Grand total:{" "}
                            <span>
                                {Math.ceil(
                                    shoppingCart.reduce(
                                        (total, book) => total + +book.price,
                                        0
                                    )
                                )}
                                $
                            </span>
                        </p>
                    </div>
                    <div className="modal-buttons">
                        <button onClick={changeStatusCartModal}>
                            Continue shopping
                        </button>
                        <NavLink to="/ShoppingCart">
                            <button onClick={changeStatusCartModal}>
                                Proceed to checkout
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedToCart;
