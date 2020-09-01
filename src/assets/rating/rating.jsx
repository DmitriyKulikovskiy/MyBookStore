import React from 'react'
import Rating from "react-rating";
import './rating.sass'

export const SetRating = ({rating}) => {
    return (
        <Rating
            initialRating={rating}
            emptySymbol={
                <i className="fa fa-star silver" aria-hidden="true"></i>
            }
            fullSymbol={<i className="fa fa-star" aria-hidden="true"></i>}
            readonly={true}
        />
    );
};
