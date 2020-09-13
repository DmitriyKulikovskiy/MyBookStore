import React, { useState } from "react";
import "./login.sass";
import { loginDescription } from "../../assets/text";
import { bgMoving } from "../../assets/animation/bgMoving";
import ErrorComponent from "./error";
import AuthPreloader from "../../assets/preloaders/preloader-auth";
import { Redirect, NavLink } from "react-router-dom";

const Login = ({
    email,
    password,
    getPassword,
    getEmail,
    user,
    loginInWithEmail,
    signUpWithEmail,
    error,
    getError,
    confirmPasswordValue,
    confirmPassword,
    changeRememberStatus,
    isLoading,
    isAuth,
}) => {
    const [toSignIn, setSignIn] = useState(false);
    const showSignIn = () => {
        setSignIn(!toSignIn);
    };
    const [errorStatus, setErrorStatus] = useState(false);
    const closeErrorAlert = () => {
        setErrorStatus(!errorStatus);
        getError((error = ""));
    };
    const loginIn = (e) => {
        e.preventDefault();
        loginInWithEmail(email, password, error);
    };
    const signUp = (e) => {
        e.preventDefault();
        signUpWithEmail(email, password, confirmPasswordValue);
    };

    return (
        <div>
            {isLoading === true ? (
                <AuthPreloader />
            ) : (
                <div>
                    {user ? (
                        isAuth === true ? (
                            <Redirect to="/Home" />
                        ) : null
                    ) : (
                        <div className="container">
                            {bgMoving}
                            <div className="row main-box">
                                <div className="col-lg-6 col-md-6 box-left ">
                                    <h1>
                                        Welcome to our <span>BookShop</span>
                                    </h1>
                                    <div className="slog">
                                        Only here you can find the best books
                                    </div>
                                    <div className="description">
                                        {loginDescription}
                                    </div>
                                    <NavLink to="/Home">
                                        <button>I don't need an account</button>
                                    </NavLink>
                                </div>

                                <div className=" col-md-6 col-lg-6 box-right">
                                    <div className="title-form">
                                        To order books on our site, you should{" "}
                                        <span>LogIn</span>
                                    </div>
                                    <hr />
                                    <form>
                                        <div className="form-group row justify-content-center">
                                            <div className="col-sm-9">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="inputEmail3"
                                                    placeholder="Email"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) =>
                                                        getEmail(e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group row justify-content-center">
                                            <div className="col-sm-9">
                                                <input
                                                    onChange={(e) =>
                                                        getPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={password}
                                                    type="password"
                                                    className="form-control"
                                                    id="inputPassword3"
                                                    placeholder="Password"
                                                    name="password"
                                                />
                                            </div>
                                        </div>
                                        {toSignIn === true ? (
                                            <div className="form-group row justify-content-center">
                                                <div className="col-sm-9">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="inputPassword4"
                                                        placeholder="Re-enter password"
                                                        name="password"
                                                        value={
                                                            confirmPasswordValue
                                                        }
                                                        onChange={(e) =>
                                                            confirmPassword(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        ) : null}

                                        {toSignIn === true ? null : (
                                            <div className="form-check form-check-inline remember-me">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="inlineCheckbox2"
                                                    value="option2"
                                                    onClick={
                                                        changeRememberStatus
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="inlineCheckbox2"
                                                >
                                                    Remember Me
                                                </label>
                                            </div>
                                        )}

                                        <div className="button-logIn">
                                            {toSignIn === false ? (
                                                <button
                                                    type="submit"
                                                    onClick={loginIn}
                                                >
                                                    LogIn
                                                </button>
                                            ) : (
                                                <button
                                                    type="submit"
                                                    onClick={signUp}
                                                >
                                                    SignUp
                                                </button>
                                            )}
                                            <div className="change-sign-button">
                                                {toSignIn === false ? (
                                                    <span onClick={showSignIn}>
                                                        Create new account
                                                    </span>
                                                ) : (
                                                    <span onClick={showSignIn}>
                                                        I have an account
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </form>

                                    <div className="logIn-with-social ">
                                        <div className="social-title">
                                            You can <span>LogIn</span> using
                                            SocialNetworks
                                        </div>
                                        <hr />
                                        <div className="box-button-container">
                                            <div className="col-lg-12">
                                                <button className="log-facebook ">
                                                    <i
                                                        className="fa fa-facebook-square"
                                                        aria-hidden="true"
                                                    ></i>
                                                    LogIn with Facebook
                                                </button>
                                            </div>
                                            <div className="col-lg-12">
                                                <button className="log-google">
                                                    <i
                                                        className="fa fa-google"
                                                        aria-hidden="true"
                                                    ></i>
                                                    LogIn with Google
                                                </button>
                                            </div>
                                            <div className="col-lg-12">
                                                <button className="log-instagram">
                                                    <i
                                                        className="fa fa-instagram"
                                                        aria-hidden="true"
                                                    ></i>
                                                    LogIn with Instagram
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ErrorComponent
                                    error={error}
                                    closeErrorAlert={closeErrorAlert}
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Login;
