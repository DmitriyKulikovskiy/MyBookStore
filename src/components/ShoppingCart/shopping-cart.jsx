import React from "react";
import "./shp-crt.sass";
import { NavLink, Redirect } from "react-router-dom";
import ShoppingCartPhone from "./shp-phone";

const ShoppingCart = ({ shoppingCart, removeBookFromShoppingCart }) => {
    
    const grouped = Object.values(
        shoppingCart.reduce((acc, n) => {
            (acc[n.title] = acc[n.title] || { ...n, qty: 0 }).qty++;
            return acc;
        }, {})
    );


    return (
        <>
            <div className="cart-logo">
                <div className="logo-bg">
                    <p>SHOPPING CART</p>
                </div>
            </div>

            {shoppingCart.length >= 1 ? (
                <>
                    <div className="container">
                        <div className="shopping-header">
                            <div className="col-2"></div>
                            <div className="col-3">Items</div>
                            <div className="col-2">qty</div>
                            <div className="col-2">price</div>
                            <div className="col-2">total</div>
                        </div>
                    </div>
                    <div className="container shp-computer">
                        {grouped.map((el) => (
                            <div key={el.id} className="book-element">
                                <div className="col-2">
                                    <img src={el.image} />
                                </div>
                                <div className="col-3 shp-description">
                                    <p>{el.title}</p>
                                    <p>
                                        Cover:{" "}
                                        {el.hardCover === false
                                            ? "Paperback"
                                            : "Hardcover"}
                                    </p>
                                </div>
                                <div className="col-2">{el.qty}</div>
                                <div className="col-2">{el.price}$</div>
                                <div className="col-2">
                                    {+el.price * el.qty}$
                                </div>
                                <div className="col-1">
                                    <i
                                        onClick={() =>
                                            removeBookFromShoppingCart(el.id)
                                        }
                                        className="fa fa-times"
                                        aria-hidden="true"
                                    ></i>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ShoppingCartPhone
                        removeBookFromShoppingCart={removeBookFromShoppingCart}
                        grouped={grouped}
                    />
                    <div className="container shopping-result">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="textArea">
                                        Add a note to your order
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="textArea"
                                        rows="4"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="col-lg-8 total-price-container">
                                <div className="total-price">
                                    <p>Total:</p>
                                    <p className="price">
                                        {shoppingCart.length >= 1
                                            ? shoppingCart
                                                  .reduce(
                                                      (total, book) =>
                                                          total + +book.price,
                                                      0
                                                  )
                                                  .toFixed(2)
                                            : null}
                                        $
                                    </p>
                                </div>
                                <div className="total-price">
                                    <p>Shipping:</p>
                                    <p className="taxes">
                                        Shipping, taxes and discounts will be
                                        calculated at checkout.
                                    </p>
                                </div>
                                <div className="total-price">
                                    <NavLink to="/Books">
                                        <button>Continue shopping</button>
                                    </NavLink>
                                    <NavLink to="/ProceedToCheckOut">
                                        <button>Proceed to Checkout</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="container">
                    <div className="center-block">
                        <div>Your shopping cart is empty.</div>
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

export default ShoppingCart;
