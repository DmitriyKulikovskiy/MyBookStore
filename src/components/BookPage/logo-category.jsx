import React from "react";
import img1 from "../../assets/books-categories/1.webp";
import img2 from "../../assets/books-categories/2.webp";
import img3 from "../../assets/books-categories/3.jpg";
import img4 from "../../assets/books-categories/4.jpg";
import img5 from "../../assets/books-categories/5.jpg";
import img6 from "../../assets/books-categories/6.jpg";
import img7 from "../../assets/books-categories/7.jpg";
import img8 from "../../assets/books-categories/8.jpg";
import img9 from "../../assets/books-categories/9.jpg";

const LogoCategory = ({ categories }) => {
    return (
        <div className='logo-category-box'>
            {categories === "Biographies and Memoirs" ? (
                <img src={img1} />
            ) : null}
            {categories === "Childrens Books" ? <img src={img2} /> : null}
            {categories === "Cookbook. Food and Wine" ? (
                <img src={img3} />
            ) : null}
            {categories === "History" ? <img src={img4} /> : null}
            {categories === "Literature and Fiction" ? (
                <img src={img5} />
            ) : null}
            {categories === "Mystery and Suspense" ? <img src={img6} /> : null}
            {categories === "Romance" ? <img src={img7} /> : null}
            {categories === "Sci-Fi and Fantasy" ? <img src={img8} /> : null}
            {categories === "Teen and Young Adult" ? <img src={img9} /> : null}
        </div>
    );
};

export default LogoCategory;
