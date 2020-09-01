import React from "react";
import "./selected-book.sass";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pg1 from "../../assets/book-pages/book-page1.jpg";
import { bookDescription } from "../../assets/text";
import { NavLink } from "react-router-dom";
import { SetRating } from "../../assets/rating/rating";
import AboutBook from "./about-book[0]";
import ReviewBook from "./review-book[0]";

const SelectedBook = ({
    match,
    booksData,
    selectHardCover,
    selectPaperCover,
    changeBookNumber,
    booksNumber,
    addToCartMultiple,
    addToWishlist,
    removeFromWishList,
    reviews,
    addComment,
}) => {
    const { params } = match;
    const { id } = params;

    const relatedBooksArr = booksData.slice(10, 14);
    return (
        <div className="container">
            {booksData.map((book) =>
                book.id === Number(id) ? (
                    <div className="row curr-book-container" key={book.id}>
                        <div className="col-lg-3">
                            <div className="curr-book-box-img">
                                <div className="curr-img">
                                    <Carousel
                                        showArrows={false}
                                        showStatus={false}
                                        showThumbs={true}
                                        thumbWidth={60}
                                        width={"auto"}
                                        showIndicators={false}
                                    >
                                        <div className="slide-image">
                                            <img src={book.image} alt="first" />
                                        </div>
                                        <div className="slide-image">
                                            <img src={pg1} alt="second" />
                                        </div>
                                        <div className="slide-image">
                                            <img src={pg1} alt="third" />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="curr-book-box-description">
                                <div className="title">{book.title}</div>
                                <div className="author">
                                    Author: {book.author}
                                </div>
                                <div className="price">
                                    <span>44.99$</span>
                                    <span>{book.price}$</span>
                                </div>
                                <div className="description">
                                    {bookDescription}
                                </div>
                                <div className="cover-change">
                                    <p className="cover">Cover:</p>
                                    <p
                                        className="paperback"
                                        onClick={() =>
                                            selectPaperCover(book.id)
                                        }
                                    >
                                        Paperback
                                    </p>
                                    <p
                                        className="hardcover"
                                        onClick={() => selectHardCover(book.id)}
                                    >
                                        Hardcover
                                    </p>
                                </div>
                                <div className="add-to-cart-box">
                                    <div className="counter-box">
                                        <p
                                            className="minus"
                                            onClick={() =>
                                                changeBookNumber(
                                                    booksNumber >= 2
                                                        ? --booksNumber
                                                        : 1
                                                )
                                            }
                                        >
                                            -
                                        </p>
                                        <p className="counter">{booksNumber}</p>
                                        <p
                                            className="plus"
                                            onClick={() =>
                                                changeBookNumber(++booksNumber)
                                            }
                                        >
                                            +
                                        </p>
                                    </div>
                                    <div className="buttons-curr-book">
                                        {book.favorite === false ? (
                                            <button
                                                onClick={() =>
                                                    addToWishlist(book, book.id)
                                                }
                                            >
                                                Add to wishlist
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    removeFromWishList(book.id)
                                                }
                                            >
                                                Remove from wishlist
                                            </button>
                                        )}
                                        <button
                                            onClick={() =>
                                                addToCartMultiple(book)
                                            }
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="social-books">
                                    <button className="log-facebook ">
                                        <i
                                            className="fa fa-facebook-square"
                                            aria-hidden="true"
                                        ></i>
                                        Facebook
                                    </button>
                                    <button className="log-google">
                                        <i
                                            className="fa fa-google"
                                            aria-hidden="true"
                                        ></i>
                                        Google
                                    </button>
                                    <button className="log-instagram">
                                        <i
                                            className="fa fa-instagram"
                                            aria-hidden="true"
                                        ></i>
                                        Instagram
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="related-box">
                                <h3>Related Books</h3>
                                {relatedBooksArr.map((el) => (
                                    <NavLink
                                        to={"/Book/" + el.id}
                                        key={el.id}
                                        className="related-book"
                                    >
                                        <img src={el.image} />
                                        <div>
                                            <p>{el.title}</p>
                                            <p>{el.price}$</p>
                                            <div className="rating-row">
                                                <SetRating rating={el.rating} />
                                            </div>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        <div className="row reviews-container del">
                            <ReviewBook
                                rating={book.rating}
                                reviews={reviews}
                                addComment={addComment}
                            />
                            <AboutBook
                                title={book.title}
                                author={book.author}
                            />
                        </div>
                    </div>
                ) : null
            )}
        </div>
    );
};

export default SelectedBook;
