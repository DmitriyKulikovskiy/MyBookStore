import React from "react";
import Rating from "react-rating";
import "./selected-book.sass";
import { useState } from "react";

const MakeReview = ({ addComment, toggleStatusReview }) => {
    const addNewComment = (rating, title, text, name) => {
        addComment(rating, title, text, name);
        toggleStatusReview();
    };

    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [name, setName] = useState("");

    return (
        <form>
            <div className="form-group row">
                <label htmlFor="inputName" className="col-sm-3 col-form-label">
                    Name
                </label>
                <div className="col-sm-9">
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-group row">
                <label
                    htmlFor="reviewTitle"
                    className="col-sm-3 col-form-label"
                >
                    Review title
                </label>
                <div className="col-sm-9">
                    <input
                        type="text"
                        className="form-control"
                        id="reviewTitle"
                        placeholder="Give your review a title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-group row rating-row">
                <div className="col-sm-3 col-form-label">Rating</div>
                <div className="col-sm-9">
                    <Rating
                        emptySymbol={
                            <i
                                className="fa fa-star silver"
                                aria-hidden="true"
                            ></i>
                        }
                        fullSymbol={
                            <i className="fa fa-star" aria-hidden="true"></i>
                        }
                        readonly={false}
                        onChange={(e) => setRating(e)}
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="textArea">Body of Review</label>
                <textarea
                    className="form-control"
                    id="textArea"
                    rows="4"
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
            </div>

            <div className="button-review">
                <button
                    type="submit"
                    onClick={() => addNewComment(rating, title, text, name)}
                >
                    Submit Review
                </button>
            </div>
        </form>
    );
};

export default MakeReview;
