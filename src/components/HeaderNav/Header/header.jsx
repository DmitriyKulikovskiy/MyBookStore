import React from "react";
import "./header.sass";
import NavbarMobile from "../Navbar/navbar-mobile";
import { fire } from "../../../firebase/config";
import { NavLink } from "react-router-dom";
import SearchBook from "./search";

const Header = ({
    userEmail,
    setIsAuth,
    searchQuery,
    searchBook,
    booksData,
    clearResult,
}) => {
    //logOut func
    const logOut = () => {
        fire.auth().signOut();
        setIsAuth(false);
    };

    //search params (home page)
    const getSearchItems =
        searchQuery && searchQuery.trim().length
            ? booksData.filter((book) => {
                  if (
                      book &&
                      book.title &&
                      book.title
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                  ) {
                      return book;
                  }
              })
            : booksData;

    return (
        <div>
            <div className="header">
                <div className="logo">
                    <i className="fa fa-book" aria-hidden="true"></i>
                    <h1>Bookshop</h1>
                </div>
                <div className="search-bar">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input
                        type="text"
                        placeholder="What book are you looking for?"
                        onChange={(e) => searchBook(e.target.value)}
                        value={searchQuery}
                    />
                    <SearchBook
                        searchQuery={searchQuery}
                        getSearchItems={getSearchItems}
                        clearResult={clearResult}
                    />
                </div>
                <div className="menu-right">
                    <div className="user">
                        <NavLink to="/UserPage">
                            <i
                                className="fa fa-user"
                                aria-hidden="true"
                                title="My Account"
                            ></i>
                        </NavLink>
                        {userEmail !== null || "" ? (
                            <span className="user-email">{userEmail}</span>
                        ) : null}
                    </div>
                    <div className="wishlist-icon-box">
                        <NavLink to="/WishList">
                            <i
                                className="fa fa-heart"
                                aria-hidden="true"
                                title="My Wishlist"
                            ></i>
                        </NavLink>
                    </div>
                    <div className="shopping-cart">
                        <NavLink to="/ShoppingCart">
                            <i
                                className="fa fa-shopping-cart"
                                aria-hidden="true"
                                title="My Shopping Cart"
                            ></i>
                        </NavLink>
                    </div>
                    {userEmail === null ? (
                        <div className="logout">
                            <NavLink to="/LoginPage">
                                <button>LogIn</button>
                            </NavLink>
                        </div>
                    ) : (
                        <div className="logout">
                            <button onClick={logOut}>LogOut</button>
                        </div>
                    )}
                </div>
                <NavbarMobile />
            </div>
            <div className="search-bar-phone">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input
                    type="text"
                    placeholder="What book are you looking for?"
                    onChange={(e) => searchBook(e.target.value)}
                    value={searchQuery}
                />
                <SearchBook
                    searchQuery={searchQuery}
                    getSearchItems={getSearchItems}
                    clearResult={clearResult}
                />
            </div>
        </div>
    );
};

export default Header;
