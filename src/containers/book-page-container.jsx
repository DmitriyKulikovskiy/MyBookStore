import React from 'react'
import { connect } from 'react-redux';
import BookPage from '../components/BookPage/book-page';
import { filterCategory,changePriceRange,filterPrice } from '../redux/booksPage-reducer';
import { addToShoppingCart, addToWishlist, removeFromWishList } from '../redux/thunk/books-thunk';


class BookPageContainer extends React.Component {
    render(){
        return (
            <BookPage {...this.props} />
        )
        
    }
}


const mapStateToProps = (state) => {
    return {
        priceRange: state.booksPageReducer.priceRange,
        categories: state.booksPageReducer.categories,
        booksData: state.homeReducer.booksData,
        isFilteredPrice: state.booksPageReducer.isFilteredPrice
    }
}


export default connect(mapStateToProps, {filterCategory,changePriceRange,addToShoppingCart,addToWishlist,removeFromWishList,filterPrice})(BookPageContainer)