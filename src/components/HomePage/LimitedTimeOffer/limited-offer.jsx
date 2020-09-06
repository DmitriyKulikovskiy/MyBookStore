import React from "react";
import "./limited-offer.sass";
import { NavLink } from "react-router-dom";
import Rating from "react-rating";

const LimitedOffer = ({
    booksData,
    addToWishlist,
    addToShoppingCart,
    removeFromWishList,
}) => {
    const booksSale = booksData.slice(20, 26);
    return (
        <div className="container limited-offer-container">
            <div className="bestsellers-title">LIMITED TIME OFFER</div>
            <div className="limited-offer-wrapper">
                <div className="limited-offer-box">
                    {booksSale.map((book, index) => (
                        <div key={book.id} className="book-element">
                            <div className="limited-star-row">
                                <Rating
                                    initialRating={book.rating}
                                    emptySymbol={
                                        <i
                                            className="fa fa-star silver"
                                            aria-hidden="true"
                                        ></i>
                                    }
                                    fullSymbol={
                                        <i
                                            className="fa fa-star"
                                            aria-hidden="true"
                                        ></i>
                                    }
                                    readonly={true}
                                />
                            </div>
                            <div className="book-content">
                                <NavLink
                                    to={"/Book/" + book.id}
                                    key={book.id}
                                    index={index}
                                >
                                    <img src={book.image} alt="bookshop" />
                                </NavLink>
                                <div className="description-content">
                                    <p className="title-book">{book.title}</p>
                                    <p>{book.author}</p>
                                    <p className="price">{book.price}$</p>
                                    <button
                                        onClick={() => addToShoppingCart(book)}
                                    >
                                        Add to Cart
                                    </button>
                                    {book.favorite === false ? (
                                        <div
                                            className="wishlist-box"
                                            onClick={() =>
                                                addToWishlist(book, book.id)
                                            }
                                        >
                                            <span>
                                                <i
                                                    className="fa fa-heart"
                                                    aria-hidden="true"
                                                    title="Add to wishlist"
                                                ></i>
                                            </span>
                                        </div>
                                    ) : (
                                        <div
                                            className="wishlist-box"
                                            onClick={() =>
                                                removeFromWishList(book.id)
                                            }
                                        >
                                            <span>
                                                <i
                                                    class="fa fa-check"
                                                    aria-hidden="true"
                                                    title="Remove from wishlist"
                                                ></i>
                                            </span>
                                        </div>
                                    )}
                                    <div className="add-to-cart-box">
                                        <span>
                                            <i
                                                onClick={() =>
                                                    addToShoppingCart(book)
                                                }
                                                className="fa fa-cart-plus"
                                                aria-hidden="true"
                                                title="Add to cart-box"
                                            ></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LimitedOffer;
