import React from "react";
import "./navbar-mobile.sass";
import { NavLink } from "react-router-dom";

function NavbarMobile() {
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className="menu__box">
                <li>
                    <NavLink className="menu__item" to="/Home">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="menu__item" to="/Books">
                        Books
                    </NavLink>
                </li>
                <li>
                    <NavLink className="menu__item" to="/Sale">
                        Sale
                    </NavLink>
                </li>
                <li>
                    <NavLink className="menu__item" to="/Support">
                        Support
                    </NavLink>
                </li>
                <li>
                    <NavLink className="menu__item" to="/About">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink className="menu__item" to="/Latest News">
                        Latest News
                    </NavLink>
                </li>
                <li>
                    <NavLink className="menu__item" to="/FAQ">
                        FAQ
                    </NavLink>
                </li>
                <li className='nav_desc'>
                    <span>
                        A room without books is like a body without a soul.
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default NavbarMobile;
