import React from "react";
import "./navbar.sass";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li activeclassname="active">
                    <NavLink to='/Home'>Home</NavLink>
                </li>
                <li activeclassname="active">
                    <NavLink to='/Books'>Books</NavLink>
                </li>
                <li activeclassname="active">
                    <NavLink to='/Sale'>Sale</NavLink>
                </li>
                <li >
                    <a href="/">Support</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Recommended</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
