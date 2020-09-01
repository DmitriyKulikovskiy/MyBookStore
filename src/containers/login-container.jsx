import React from "react";
import { connect } from "react-redux";
import Login from "../components/Login/login";
import {
    getEmail,
    getPassword,
    getUserData,
    getError,
    confirmPassword,
    changeRememberStatus,
    getUserEmail,
} from "../redux/auth-reducer";
import {
    loginInWithEmail,
    authListener,
    signUpWithEmail,
} from "../redux/thunk/auth-thunk";

class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.authListener(this.props.isRemembered);
    }


    render() {
        return <Login {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.authReducer.email,
        password: state.authReducer.password,
        user: state.authReducer.user,
        error: state.authReducer.error,
        confirmPasswordValue: state.authReducer.confirmPasswordValue,
        isRemembered: state.authReducer.isRemembered,
        isLoading: state.authReducer.isLoading,
        userEmail: state.authReducer.userEmail,
        isAuth: state.authReducer.isAuth
    };
};

export default connect(mapStateToProps, {
    getEmail,
    getPassword,
    getUserData,
    getError,
    confirmPassword,
    changeRememberStatus,
    getUserEmail,
    loginInWithEmail,
    authListener,
    signUpWithEmail,
})(LoginContainer);
