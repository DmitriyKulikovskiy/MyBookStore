import React from "react";
import "../Bestsellers/current-bestsellers.sass";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import Rating from "react-rating";

const TopRatedBooks = ({
    booksData,
    deviceType,
    addToWishlist,
    addToShoppingCart,
    removeFromWishList,
}) => {
    const bestSellers = booksData.slice(10, 20);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1200, min: 992 },
            items: 5,
        },
        mobile: {
            breakpoint: { max: 991, min: 768 },
            items: 4,
        },
        mobile1: {
            breakpoint: { max: 767, min: 518 },
            items: 3,
        },
        mobile2: {
            breakpoint: { max: 518, min: 0 },
            items: 2,
        },
    };

    return (
        <div className="container books-container">
            <div className="color">
                <div className="bestsellers-title">Top Rated Books</div>
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    keyBoardControl={true}
                    customTransition="transform 300ms ease-in-out"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    deviceType={deviceType}
                >
                    {bestSellers.map((book, index) => (
                        <div key={book.id} className="book-element">
                            <div className="star-row">
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
                                                className="fa fa-cart-plus"
                                                aria-hidden="true"
                                                title="Add to cart-box"
                                                onClick={() =>
                                                    addToShoppingCart(book)
                                                }
                                            ></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default TopRatedBooks;
