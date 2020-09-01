import React from "react";
import { connect } from "react-redux";
import SelectedBook from "../components/SelectedBook/selected-book";
import {
    selectHardCover,
    selectPaperCover,
    changeBookNumber,
    addComment,
} from "../redux/books-reducer";
import {
    addToWishlist,
    removeFromWishList,
    addToCartMultiple,
} from "../redux/thunk/books-thunk";

class SelectedBookContainer extends React.Component {
    render() {
        return <SelectedBook {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        booksData: state.homeReducer.booksData,
        booksNumber: state.homeReducer.booksNumber,
        reviews: state.homeReducer.reviews,
    };
};

export default connect(mapStateToProps, {
    selectHardCover,
    selectPaperCover,
    changeBookNumber,
    addToWishlist,
    removeFromWishList,
    addToCartMultiple,
    addComment,
})(SelectedBookContainer);
