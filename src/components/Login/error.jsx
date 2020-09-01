import React from "react";

const ErrorComponent = ({ closeErrorAlert, error }) => {
    return (
        <div className="error-container">
            {error.length > 3 || error.code ? (
                <div
                    className={
                        error === "" || null ? "hider-error" : "error-box"
                    }
                >
                    <p className="error-alert">
                        {error.code === "auth/user-not-found" ? (
                            <span>Something gone wrong. Try again.</span>
                        ) : null || error === "Passwords must match" ? (
                            <span>Passwords must match.</span>
                        ) : null || error.code === "auth/invalid-email" ? (
                            <span>The email address is badly formatted.</span>
                        ) : null || error.code === "auth/wrong-password" ? (
                            <span>
                                Error. Please, check your email and password.
                            </span>
                        ) : null || error.code === "auth/too-many-requests" ? (
                            <span>
                                Server is not working now. Please, wait some
                                minutes.
                            </span>
                        ) : null || error.code === "auth/weak-password" ? (
                            <span>Your password is to weak.</span>
                        ) : null ||
                          error.code === "auth/email-already-in-use" ? (
                            <span>
                                The email address is already in use by another
                                account.
                            </span>
                        ) : null }

                        <i
                            className="fa fa-times"
                            aria-hidden="true"
                            onClick={closeErrorAlert}
                        ></i>
                    </p>
                </div>
            ) : null}
        </div>
    );
};

export default ErrorComponent;
