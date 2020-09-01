import React from "react";

const CategoryList = ({ filterCategory }) => {
    return (
        <ul>
            <li onClick={() => filterCategory("All Books")}>All Books</li>
            <li onClick={() => filterCategory("Biographies and Memoirs")}>
                Biographies and Memoirs
            </li>
            <li onClick={() => filterCategory("Childrens Books")}>
                Children's Books
            </li>
            <li onClick={() => filterCategory("Cookbook. Food and Wine")}>
                Cookbook. Food and Wine
            </li>
            <li onClick={() => filterCategory("History")}>History</li>
            <li onClick={() => filterCategory("Literature and Fiction")}>
                Literature and Fiction
            </li>
            <li onClick={() => filterCategory("Mystery and Suspense")}>
                Mystery and Suspense
            </li>
            <li onClick={() => filterCategory("Romance")}>Romance</li>
            <li onClick={() => filterCategory("Sci-Fi and Fantasy")}>
                Sci-Fi and Fantasy
            </li>
            <li onClick={() => filterCategory("Teen and Young Adult")}>
                Teen and Young Adult
            </li>
        </ul>
    );
};

export default CategoryList;
