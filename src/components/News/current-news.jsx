import React from "react";
import "./news.sass";
import { post1, post5, post4, post3, post2 } from "../../assets/text";
import { NavLink } from "react-router-dom";

const CurrentNews = ({ match, newsData }) => {
    const { params } = match;
    const { id } = params;

    return (
        <div>
            {newsData.map((el) =>
                +el.id === +id ? (
                    <div key={el.id} className="container current-news-box">
                        <img src={el.image} />
                        <div className="row content-box">
                            <div className='return-back'>
                                <NavLink to='/AllNews'>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    Back to All News
                                </NavLink>
                            </div>
                            <div className="title-news col-lg-12">
                                {el.title}
                            </div>
                            <div className="posted col-lg-12">
                                Posted by: <span>Admin</span> at{" "}
                                {new Date().toLocaleString()}
                            </div>
                            <div className="news-content col-lg-12">
                                <div className="part1">{post1}</div>
                                <div className="part2">{post2}</div>
                                <div className="part3">{post3}</div>
                                <div className="part4">{post4}</div>
                                <div className="part5">{post5}</div>
                            </div>
                        </div>
                        <div className="shares">
                            <p>Shares</p>
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
                ) : null
            )}
        </div>
    );
};

export default CurrentNews;
