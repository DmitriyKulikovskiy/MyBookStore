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
                    <NavLink to="/ContactUs">Support</NavLink>
                </li>
                <li>
                    <NavLink to="/AboutUs">About</NavLink>
                </li>
                <li>
                    <NavLink to="/AllNews">Latest News</NavLink>
                </li>
                <li>
                    <NavLink to="/FAQ">FAQ</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
