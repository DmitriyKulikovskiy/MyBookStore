const GET_DISCOUNT = "GET_DISCOUNT";
const CHOOSE_DELIVERY = "CHOOSE_DELIVERY";
const ADD_PROMO = "ADD_PROMO";
const MAKE_ORDER = "MAKE_ORDER";

const initialState = {
    discountStatus: false,
    deliveryMethod: "",
    promoCode: "",
    order: [],
};

const checkOutReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DISCOUNT:
            return {
                ...state,
                discountStatus: !state.discountStatus,
            };

        case CHOOSE_DELIVERY:
            return {
                ...state,
                deliveryMethod: action.method,
            };

        case ADD_PROMO:
            return {
                ...state,
                promoCode: action.promo,
            };

        case MAKE_ORDER:
            let newOrder = {
                firstName: action.name,
                lastName: action.lastName,
                phone: action.phone,
                city: action.city,
                delivery: action.delivery,
                payment: action.payment,
                address: action.address,
                houseNumber: action.house,
                apartmentNumber: action.apartmentNumber,
                totalPrice: action.totalPrice,
                purchases: action.purchases,
            };

            return {
                ...state,
                order: [...state.order, newOrder],
            };

        default:
            return state;
    }
};

export const changeDiscountStatus = () => ({ type: "GET_DISCOUNT" });
export const chooseDelivery = (method) => ({ type: "CHOOSE_DELIVERY", method });
export const addPromoCode = (promo) => ({ type: "ADD_PROMO", promo });

//order
export const makeAnOrder = (
    firstName,
    lastName,
    phone,
    city,
    delivery,
    payment,
    address,
    houseNumber,
    apartmentNumber,
    totalPrice,
    purchases
) => ({
    type: "MAKE_ORDER",
    firstName,
    lastName,
    phone,
    city,
    delivery,
    payment,
    address,
    houseNumber,
    apartmentNumber,
    totalPrice,
    purchases,
});

export default checkOutReducer;
