const FILTERED_CATEGORIES = 'FILTERED_CATEGORIES'
const CHANGE_PRICE_RANGE = 'CHANGE_PRICE_RANGE'
const FILTER_PRICE = 'FILTER_PRICE'

const initialState = {
    categories: 'All Books',
    priceRange: 100,
    isFilteredPrice: 'Price, low'
}

const booksPageReducer = (state = initialState, action) => {
    switch(action.type){
        
        case FILTERED_CATEGORIES: 
            return {
                ...state,
                categories: action.category
            }

        case CHANGE_PRICE_RANGE: 
            return {
                ...state,
                priceRange: action.price < 8 ? 8 : action.price 
            }

        case FILTER_PRICE:
            return {
                ...state,
                isFilteredPrice: action.price
            }

        default:
            return state
    }
}

export const filterCategory = (category) => ({type: 'FILTERED_CATEGORIES', category})
export const changePriceRange = (price) => ({type: 'CHANGE_PRICE_RANGE', price})
export const filterPrice = (price) => ({type: 'FILTER_PRICE', price})

export default booksPageReducer