import React from "react";
import { connect } from "react-redux";
import { getUserEmail, setIsAuth } from "../redux/auth-reducer";
import HomePage from "../components/HomePage/home-page";
import {
    addToWishlist,
    addToShoppingCart,
    removeFromWishList,
} from "../redux/thunk/books-thunk";

class HomePageContainer extends React.Component {
    render() {
        return <HomePage {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        userEmail: state.authReducer.userEmail,
        isAuth: state.authReducer.isAuth,
        booksData: state.homeReducer.booksData,
        newsData: state.homeReducer.newsData,
    };
};

export default connect(mapStateToProps, {
    getUserEmail,
    setIsAuth,
    addToWishlist,
    addToShoppingCart,
    removeFromWishList,
})(HomePageContainer);
