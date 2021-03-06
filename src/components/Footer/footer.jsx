import React from "react";
import "./footer.sass";
import Subscriber from "./subscriber";
import { NavLink } from "react-router-dom";
import FooterCopyright from "./footer-copyright";

const Footer = () => {
    return (
        <div className="footer-container">
            <Subscriber />
            <div className="container footer-box">
                <div className="row ">
                    <div className="col-lg-3 col-md-3 footer-item-box">
                        <p className="footer-item-title">
                            <i className="fa fa-book" aria-hidden="true"></i>
                            <span>Bookshop</span>
                        </p>
                        <p className="footer-item-description">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-3 footer-item-box">
                        <p className="footer-item-title">
                            <i className="fa fa-compass" aria-hidden="true"></i>
                            <span>our main office</span>
                        </p>
                        <p className="item-geo">Kiev,Ukraine | Europe</p>
                        <p className="item-phone">Phone: +380 987 344 987</p>
                        <p className="item-email">dmitriy.kulikovskiy23@gmail.com</p>
                    </div>
                    <div className="col-lg-3 col-md-3 footer-item-box">
                        <p className="footer-item-title">
                            <i className="fa fa-user" aria-hidden="true"></i>
                            <span>contact with us</span>
                        </p>
                        <div className="footer-item-contacts">
                            <p>
                                <a href='mailto:dmitriy.kulikovskiy23@gmail.com'>
                                    <i className="fa fa-google" aria-hidden="true"></i>
                                    <span>Google</span>
                                </a>
                            </p>
                            <p>
                                <a href='https://www.linkedin.com/in/dmitriy-kulikovskiy'>
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    <span>LinkedIn</span>
                                </a>
                            </p>
                            <p>
                                <a href='https://t.me/dmitriy_k23'>
                                    <i className="fa fa-telegram" aria-hidden="true"></i>
                                    <span>Telegram</span>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 footer-item-box">
                        <p className="footer-item-title">
                            <i className="fa fa-info" aria-hidden="true"></i>
                            <span>information</span>
                        </p>
                        <p className="footer-item-info">
                            <NavLink to='/AboutUs'>About Us</NavLink>
                            <NavLink to='/UserPage'>My Account</NavLink>
                            <NavLink to='/FAQ'>FAQ</NavLink>
                            <a href='https://github.com/DmitriyKulikovskiy/MyBookStore'>GitHub</a>
                        </p>
                    </div>
                </div>
            </div>
            <FooterCopyright />
        </div>
    );
};

export default Footer;
