import React from "react";
import "./selected-book.sass";
import { SetRating } from "../../assets/rating/rating";
import MakeReview from "./make-review[0]";
import { useState } from "react";

const ReviewBook = ({ rating, reviews, addComment }) => {
    const [statusReview, setStatus] = useState(false);
    const toggleStatusReview = () => {
        setStatus(!statusReview);
    };

    return (
        <div className="col-lg-8 col-md-8 del">
            <div className="title">Customer Reviews</div>
            <div className="header-container">
                <div>
                    <SetRating rating={rating} />
                    <span> - </span>
                    <span>{`Based on ${reviews.length} reviews`}</span>
                </div>
                <button onClick={toggleStatusReview}>Write A Review</button>
            </div>

            <div
                className={
                    statusReview === false ? "hide-review" : "open-review"
                }
            >
                <MakeReview
                    addComment={addComment}
                    toggleStatusReview={toggleStatusReview}
                />
            </div>

            {reviews.map((rew) => (
                <div key={rew.id} className="review-item">
                    <div className="rew-title">
                        {rew.title}
                        <span> - </span>
                        <SetRating rating={rew.rating} />
                    </div>
                    <div className="rew-date">
                        <span>{rew.name} on </span>
                        {new Date().toLocaleString()}
                    </div>
                    <div className="rew-text">{rew.text}</div>
                </div>
            ))}
        </div>
    );
};

export default ReviewBook;
