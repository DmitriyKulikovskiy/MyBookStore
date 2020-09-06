import React from "react";
import { NavLink } from "react-router-dom";

const SearchBook = ({ searchQuery, getSearchItems, clearResult }) => {
    return (
        <div
            className={searchQuery === "" ? "hide" : "search-result-container"}
        >
            {searchQuery.length >= 1 ? (
                getSearchItems.length >= 1 ? (
                    getSearchItems.map((el) => (
                        <NavLink
                            to={"/Book/" + el.id}
                            key={el.id}
                            onClick={() => clearResult()}
                        >
                            <div className="result-element">
                                <img src={el.image} />
                                <div className="result-content">
                                    <p>{el.title}</p>
                                    <p>{el.price}$</p>
                                </div>
                            </div>
                        </NavLink>
                    ))
                ) : (
                    <span>Book is not found</span>
                )
            ) : null}
        </div>
    );
};

export default SearchBook;
