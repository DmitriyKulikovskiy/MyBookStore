import React from "react";

const NewsPages = ({ newsData, changePage, newsPerPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(newsData.length / newsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination justify-content-center">
            {pageNumbers.length > 0}
            {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                    <p onClick={() => changePage(number)} className="page-link">
                        {number}
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default NewsPages;