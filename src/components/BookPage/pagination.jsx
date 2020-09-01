import React from "react";

const Pagination = ({ booksData, changePage, booksPerPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(booksData.length / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination justify-content-center">
            {pageNumbers.length > 0 && <span>Pages: </span>}
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

export default Pagination;
