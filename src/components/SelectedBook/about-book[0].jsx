import React from "react";
import "./selected-book.sass";

const AboutBook = ({ title, author }) => {
    return (
        <div className="col-lg-4 col-md-4 del">
            <div className="about-book">
                <table>
                    <tbody>
                        <tr>
                            <th>Book Title</th>
                            <th>{title}</th>
                        </tr>
                        <tr>
                            <th>Author</th>
                            <th>{author}</th>
                        </tr>
                        <tr>
                            <th>Type</th>
                            <th>Novel</th>
                        </tr>
                        <tr>
                            <th>Published</th>
                            <th>
                                {new Date().toLocaleString("en-gb", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </th>
                        </tr>
                        <tr>
                            <th>Cover</th>
                            <th>Select</th>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <th>Low</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="advertisement">
                <div>Made</div>
                <div>By</div>
                <a href="https://www.linkedin.com/in/dmitriy-kulikovskiy/">
                    Dmitriy Kulikovskiy
                </a>
                <div>Looking for a Job</div>
            </div>
        </div>
    );
};

export default AboutBook;
