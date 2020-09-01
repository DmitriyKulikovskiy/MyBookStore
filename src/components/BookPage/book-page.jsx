import React, { useState } from "react";
import "./book.sass";
import CategoryList from "./category-list";
import LogoCategory from "./logo-category";
import { categoryDescription } from "../../assets/text";
import { SetRating } from "../../assets/rating/rating";
import { NavLink } from "react-router-dom";
import Pagination from "./pagination";

const BookPage = ({
    filterCategory,
    changePriceRange,
    priceRange,
    categories,
    booksData,
    addToShoppingCart,
    addToWishlist,
    removeFromWishList,
    filterPrice,
    isFilteredPrice,
}) => {

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(8);
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const changePage = (pageNumber) => setCurrentPage(pageNumber);

    // filter range price
    const portionBooks =
        categories === "All Books"
            ? booksData
                  .filter((el) => +el.price <= priceRange)
                  .slice(indexOfFirstBook, indexOfLastBook)
            : booksData.filter(
                  (el) => el.genre === categories && +el.price <= priceRange
              );

    // filter low - high price
    const filteredBooksData = portionBooks.sort((a, b) =>
        isFilteredPrice === "Price, low" ? a.price - b.price : b.price - a.price
    );


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="side-bar">
                        <div className="categories">
                            <p>Categories</p>
                            <CategoryList filterCategory={filterCategory} />
                        </div>
                        <div className="price-range">
                            <p>Price Range</p>
                            <p className="range-cursor">
                                Range: 8$ - {priceRange}$
                            </p>
                            <input
                                type="range"
                                value={priceRange}
                                onChange={(e) =>
                                    changePriceRange(e.target.value)
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-9">
                    <LogoCategory categories={categories} />
                    <p className="category-title">{categories}</p>
                    <p className="category-description">
                        {categories === "All Books"
                            ? null
                            : categoryDescription}
                    </p>
                    <div className="sort-by">
                        <span>Sort by</span>
                        <select onChange={(e) => filterPrice(e.target.value)}>
                            <option value="Price, low">Price, low</option>
                            <option value="Price, high">Price, high</option>
                        </select>
                    </div>
                    <div className="container limited-offer-container">
                        <div className="limited-offer-wrapper">
                            <div className="limited-offer-box">
                                {filteredBooksData.map((book, index) => (
                                    <div key={book.id} className="book-element">
                                        <div className="limited-star-row">
                                            <SetRating rating={book.rating} />
                                        </div>
                                        <div className="book-content">
                                            <NavLink
                                                to={"/Book/" + book.id}
                                                key={book.id}
                                                index={index}
                                            >
                                                <img
                                                    src={book.image}
                                                    alt="bookshop"
                                                />
                                            </NavLink>
                                            <div className="description-content">
                                                <p className="title-book">
                                                    {book.title}
                                                </p>
                                                <p>{book.author}</p>
                                                <p className="price">
                                                    {book.price}$
                                                </p>
                                                <button
                                                    onClick={() =>
                                                        addToShoppingCart(book)
                                                    }
                                                >
                                                    Add to Cart
                                                </button>
                                                {book.favorite === false ? (
                                                    <div
                                                        className="wishlist-box"
                                                        onClick={() =>
                                                            addToWishlist(
                                                                book,
                                                                book.id
                                                            )
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
                                                            removeFromWishList(
                                                                book.id
                                                            )
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
                                                                addToShoppingCart(
                                                                    book
                                                                )
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
                    {categories === "All Books" ? (
                        <Pagination
                            booksData={booksData}
                            changePage={changePage}
                            booksPerPage={booksPerPage}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default BookPage;
