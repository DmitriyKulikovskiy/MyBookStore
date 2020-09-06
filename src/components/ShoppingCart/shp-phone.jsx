import React from "react";
import "./shp-crt.sass";

const ShoppingCartPhone = ({ grouped, removeBookFromShoppingCart }) => {
    return (
        <div className="container shp-phone">
            <div className="row">
                {grouped.map((el) => (
                    <div key={el.id} className="book-element">
                        <div className="col-lg-12">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>
                                            <div>Name</div>
                                            <div>
                                                <img src={el.image} />
                                            </div>
                                            <div>{el.title}</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div>Cover</div>
                                            <div>
                                                {el.hardCover === false
                                                    ? "Paperback"
                                                    : "Hardcover"}
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div>Quantity</div>
                                            <div>{el.qty}</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div>Price</div>
                                            <div>{el.price}$</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div>Total</div>
                                            <div>{+el.price * el.qty}$</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <div>Remove</div>
                                            <div>
                                                {" "}
                                                <i
                                                    onClick={() =>
                                                        removeBookFromShoppingCart(
                                                            el.id
                                                        )
                                                    }
                                                    className="fa fa-times"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShoppingCartPhone;
