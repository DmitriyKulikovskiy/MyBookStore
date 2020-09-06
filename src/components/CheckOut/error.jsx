import React from "react";
import "./check-out.sass";

const ModalError = ({ setError }) => {
    return (
        <div className="modal-done-container">
            <div className="container modal-done-box">
                <i
                    onClick={() => setError(false)}
                    className="fa fa-times"
                    aria-hidden="true"
                ></i>
                <div className="title-modal">Error</div>
                <div className="modal-description">
                    You must fill all required fields
                </div>
            </div>
        </div>
    );
};

export default ModalError;
