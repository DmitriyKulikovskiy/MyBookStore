import {
    addBookToWishList,
    changeWishlistStatus,
    addBookToShoppingCart,
    changeStatusCartModal,
    addToModalBook,
    removeBookFromWishList,
    addToCartMultiply

} from "../books-reducer";

export const addToWishlist = (book, id) => (dispatch) => {
    dispatch(addBookToWishList(book));
    dispatch(changeWishlistStatus(id));
};

export const removeFromWishList = (id) => (dispatch) => {
    dispatch(removeBookFromWishList(id))
    dispatch(changeWishlistStatus(id));
}

export const addToShoppingCart = (book) => (dispatch) => {
    dispatch(addBookToShoppingCart(book));
    dispatch(addToModalBook(book))
    dispatch(changeStatusCartModal());
};


export const addToCartMultiple = (book) => (dispatch) => {
    dispatch(addToCartMultiply(book));
    dispatch(addToModalBook(book))
    dispatch(changeStatusCartModal());
};