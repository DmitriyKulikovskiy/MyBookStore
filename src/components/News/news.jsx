import React from "react";
import "./news.sass";
import { useState } from "react";
import NewsPages from "./new-pagination";
import { NavLink } from "react-router-dom";

const AllNews = ({ newsData }) => {

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(6);
    const indexOfLastBook = currentPage * newsPerPage;
    const indexOfFirstBook = indexOfLastBook - newsPerPage;
    const changePage = (pageNumber) => setCurrentPage(pageNumber);
    const portionsNews = newsData.slice(indexOfFirstBook, indexOfLastBook)

    return (
        <div className="container">
            <div className="news-title">Latest News</div>
            <div className="row latest-news-box">
                {portionsNews.map((news) => (
                    <div key={news.id} className="col-lg-4">
                        <div className="item-box-news">
                            <img src={news.image} />
                            <p className="date-posted-news">
                                {new Date().toLocaleString()}
                            </p>
                            <p className="heading-news">{news.title}</p>
                            <p className="news-content">{news.content}</p>
                            <div className="button-latest-news">
                                <NavLink to={'/CurrentNews/' + news.id}>
                                    <button>CONTINUE READING</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <NewsPages newsData={newsData} newsPerPage={newsPerPage} changePage={changePage}/>
        </div>
    );
};

export default AllNews;
