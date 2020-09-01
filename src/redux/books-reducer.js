import booksData from "../assets/db.json";
import newsData from "../assets/news.json";
import reviewsData from "../assets/reviews.json";
import shortid from "shortid";

const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
const CHANGE_WISHLIST_STATUS = "CHANGE_WISHLIST_STATUS";
const ADD_TO_SHOPPING_CART = "ADD_TO_SHOPPING_CART";
const CHANGE_STATUS_MODAL = "CHANGE_STATUS_MODAL";
const ADD_TO_CART_MODAL = "ADD_TO_CART_MODAL";
const SELECT_HARD_COVER = "SELECT_HARD_COVER";
const SELECT_PAPER_COVER = "SELECT_PAPER_COVER";
const CHANGE_BOOKS_NUMBER = "CHANGE_BOOKS_NUMBER";
const ADD_TO_SHOPPING_CART_MULTIPLY = "ADD_TO_SHOPPING_CART_MULTIPLY";
const ADD_COMMENT = "ADD_COMMENT";

const initialState = {
    booksData: booksData,
    newsData: newsData,
    wishList: [],
    shoppingCart: [],
    statusCartModal: false,
    cartModalBook: null,
    booksNumber: 1,
    reviews: reviewsData,
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return {
                ...state,
                wishList: [...state.wishList, { ...action.book }],
            };

        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishList: state.wishList.filter(
                    (book) => book.id !== action.id
                ),
            };

        case CHANGE_WISHLIST_STATUS:
            return {
                ...state,
                booksData: state.booksData.map((book) =>
                    book.id === action.id
                        ? { ...book, favorite: !book.favorite }
                        : book
                ),
            };

        case ADD_TO_SHOPPING_CART:
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, { ...action.book }],
            };
        case CHANGE_STATUS_MODAL:
            return {
                ...state,
                statusCartModal: !state.statusCartModal,
            };

        case ADD_TO_CART_MODAL:
            return {
                ...state,
                cartModalBook: action.book,
            };

        case SELECT_HARD_COVER:
            return {
                ...state,
                booksData: state.booksData.map((el) =>
                    el.id === action.id
                        ? {
                              ...el,
                              price: (+el.price + 5).toFixed(2),
                              hardCover: true,
                          }
                        : el
                ),
            };

        case SELECT_PAPER_COVER:
            return {
                ...state,
                booksData: state.booksData.map((el) =>
                    el.id === action.id && el.hardCover === true
                        ? {
                              ...el,
                              price: (+el.price - 5).toFixed(2),
                              hardCover: false,
                          }
                        : el
                ),
            };

        case CHANGE_BOOKS_NUMBER:
            return {
                ...state,
                booksNumber: action.number,
            };

        case ADD_TO_SHOPPING_CART_MULTIPLY:
            return {
                ...state,
                shoppingCart: [
                    ...state.shoppingCart,
                    ...new Array(state.booksNumber).fill({ ...action.book }),
                ],
                booksNumber: 1,
            };

        case ADD_COMMENT:
            let newReview = {
                id: shortid.generate(),
                rating: action.rating,
                title: action.title,
                text: action.text,
                name: action.name,
            };
            return {
                ...state,
                reviews: [newReview, ...state.reviews],
            };

        default:
            return state;
    }
};

export const addBookToWishList = (book) => ({ type: "ADD_TO_WISHLIST", book });
export const changeWishlistStatus = (id) => ({
    type: "CHANGE_WISHLIST_STATUS",
    id,
});
export const addBookToShoppingCart = (book) => ({
    type: "ADD_TO_SHOPPING_CART",
    book,
});
export const changeStatusCartModal = () => ({ type: "CHANGE_STATUS_MODAL" });
export const addToModalBook = (book) => ({ type: "ADD_TO_CART_MODAL", book });
export const removeBookFromWishList = (id) => ({
    type: "REMOVE_FROM_WISHLIST",
    id,
});
export const selectHardCover = (id) => ({ type: "SELECT_HARD_COVER", id });
export const selectPaperCover = (id) => ({ type: "SELECT_PAPER_COVER", id });
export const changeBookNumber = (number) => ({
    type: "CHANGE_BOOKS_NUMBER",
    number,
});
export const addToCartMultiply = (book) => ({
    type: "ADD_TO_SHOPPING_CART_MULTIPLY",
    book,
});
export const addComment = (rating, title, text, name) => ({
    type: "ADD_COMMENT",
    rating,
    title,
    text,
    name,
});

export default homeReducer;
