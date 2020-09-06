import React from 'react'
import { connect } from 'react-redux';
import ShoppingCart from '../components/ShoppingCart/shopping-cart';
import { removeBookFromShoppingCart } from '../redux/books-reducer';

class ShoppingBookContainer extends React.Component {
    render(){
        return (
            <ShoppingCart {...this.props} />
        )
        
    }
}


const mapStateToProps = (state) => {
    return {
        shoppingCart: state.homeReducer.shoppingCart
    }
}


export default connect(mapStateToProps, {removeBookFromShoppingCart})(ShoppingBookContainer)