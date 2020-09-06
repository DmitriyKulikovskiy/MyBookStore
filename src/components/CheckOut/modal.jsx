import React from "react";
import "./check-out.sass";
import { NavLink } from "react-router-dom";

const ModalDone = ({ setModal }) => {
    return (
        <div className="modal-done-container">
            <div className="container modal-done-box">
                <NavLink to="/Home">
                    <i
                        onClick={() => setModal(false)}
                        className="fa fa-times"
                        aria-hidden="true"
                    ></i>
                </NavLink>
                <div className="title-modal">Book Shop</div>
                <div className="modal-description">
                    Thank you for your purchase, our administrator will contact
                    you shortly.
                </div>
            </div>
        </div>
    );
};

export default ModalDone;
