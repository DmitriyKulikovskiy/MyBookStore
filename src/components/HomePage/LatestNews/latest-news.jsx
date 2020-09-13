import React from "react";
import "./latest-news.sass";
import { NavLink } from "react-router-dom";

const LatestNews = ({ newsData }) => {
    const newsHomePage = newsData.slice(0, 3);
    return (
        <div className="container-fluid latest-news-container">
            <div className="title-news">Our latest news</div>
            <div className="container">
                <div className="row latest-news-box">
                    {newsHomePage.map((el) => (
                        <div key={el.id} className="col-lg-4">
                            <div className="item-box-news">
                                <img src={el.image} />
                                <p className="date-posted-news">
                                    {new Date().toLocaleString()}
                                </p>
                                <p className="heading-news">{el.title}</p>
                                <p className="news-content">{el.content}</p>
                                <div className="button-latest-news">
                                    <NavLink to={'/CurrentNews/' + el.id}>
                                        <button>CONTINUE READING</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <NavLink to="/AllNews">
                    <button>View all news</button>
                </NavLink>
            </div>
        </div>
    );
};

export default LatestNews;
