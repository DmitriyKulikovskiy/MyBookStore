import React from "react";
import { connect } from "react-redux";
import CheckOut from "../components/CheckOut/check-out";
import { removeBookFromShoppingCart } from "../redux/books-reducer";
import { chooseDelivery, addPromoCode } from "../redux/checkOut-reducer";
import { makeOrder } from "../redux/thunk/check-out-thunk";

class CheckOutContainer extends React.Component {
    render() {
        return <CheckOut {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingCart: state.homeReducer.shoppingCart,
        deliveryMethod: state.checkOutReducer.deliveryMethod,
        promoCode: state.checkOutReducer.promoCode,
    };
};

export default connect(mapStateToProps, {
    removeBookFromShoppingCart,
    chooseDelivery,
    addPromoCode,
    makeOrder,
})(CheckOutContainer);
