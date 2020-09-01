import React from "react";
import "./top3.sass";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopThree = ({ booksData,deviceType }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 0 },
            items: 1,
        },
    };

    let filteredOnTop = booksData.filter((top) => top.onTop);

    const bookWrapper = (index) => {
        if (index === 0) {
            return "top-book-wrapper top-one";
        } else if (index === 1) {
            return "top-book-wrapper top-two";
        } else if (index === 2) {
            return "top-book-wrapper top-three";
        }
    };

    return (
        <div className="container-fluid book-top-container">
            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                showDots={true}
                autoPlay={deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
            >
                {filteredOnTop.map((book, index) => (
                    <div className="top-book-box" key={book.id}>
                        <div className={bookWrapper(index)}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="image-box">
                                            <img src={book.image} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="description-top-box">
                                            <p className="title-top">
                                                {book.title}
                                            </p>
                                            <p className="price-top">
                                                {book.price}$
                                            </p>
                                            <p className="rating-top">
                                                <i
                                                    className="fa fa-star"
                                                    aria-hidden="true"
                                                ></i>
                                                <i
                                                    className="fa fa-star"
                                                    aria-hidden="true"
                                                ></i>
                                                <i
                                                    className="fa fa-star"
                                                    aria-hidden="true"
                                                ></i>
                                                <i
                                                    className="fa fa-star"
                                                    aria-hidden="true"
                                                ></i>
                                                <i
                                                    className="fa fa-star"
                                                    aria-hidden="true"
                                                ></i>
                                            </p>
                                            <p className="author-top">
                                                Author: {book.author}
                                            </p>
                                            <button>View detail</button>
                                            <div className="view-ss">
                                                View Details
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default TopThree;
