import { makeAnOrder } from "../checkOut-reducer";
import { clearShoppingCart } from "../books-reducer";

export const makeOrder = (
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
) => (dispatch) => {
    dispatch(
        makeAnOrder(
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
        )
    );
    dispatch(clearShoppingCart());
};
