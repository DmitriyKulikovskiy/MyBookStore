import React from "react";
import "./header.sass";
import NavbarMobile from "../Navbar/navbar-mobile";
import { fire } from "../../../firebase/config";

const Header = ({ userEmail, setIsAuth }) => {
    const logOut = () => {
        fire.auth().signOut();
        setIsAuth(false);
    };

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
                    />
                </div>
                <div className="menu-right">
                    <div className="user">
                        <i
                            className="fa fa-user"
                            aria-hidden="true"
                            title="My Account"
                        ></i>
                        <span className="user-email">{userEmail}</span>
                    </div>
                    <div className="wishlist-icon-box">
                        <i
                            className="fa fa-heart"
                            aria-hidden="true"
                            title="My Wishlist"
                        ></i>
                    </div>
                    <div className="shopping-cart">
                        <i
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                            title="My Shopping Cart"
                        ></i>
                    </div>
                    <div className="logout">
                        <button onClick={logOut}>LogOut</button>
                    </div>
                </div>
                <NavbarMobile />
            </div>
            <div className="search-bar-phone">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input
                    type="text"
                    placeholder="What book are you looking for?"
                />
            </div>
        </div>
    );
};

export default Header;

// <i className="fa fa-user" aria-hidden="true"></i>

// <i className="fa fa-shopping-cart" aria-hidden="true"></i>
