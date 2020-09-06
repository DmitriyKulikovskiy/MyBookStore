import React from "react";
import { connect } from "react-redux";
import WishList from "../components/WishList/wishlist";
import { removeBookFromWishList } from "../redux/books-reducer";

class WishListContainer extends React.Component {
    render() {
        return <WishList {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        wishList: state.homeReducer.wishList,
    };
};

export default connect(mapStateToProps, { removeBookFromWishList })(
    WishListContainer
);
