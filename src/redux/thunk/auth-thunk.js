import {
    loadingAuth,
    getError,
    getUserData,
    getUserEmail,
    setIsAuth,
} from "../auth-reducer";
import { fire } from "../../firebase/config";

export const loginInWithEmail = (email, password) => (dispatch) => {
    dispatch(loadingAuth(true));
    fire.auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
            dispatch(getError(error));
        })
        .then(() => dispatch(setIsAuth(true)))
        .then(() => dispatch(loadingAuth(false)));
};

export const authListener = (isRemembered) => (dispatch) => {
    fire.auth().onAuthStateChanged((user) => {
        dispatch(getUserEmail(user ? user.email : null));
        if (user) {
            dispatch(getUserData(user));
            if (isRemembered === true) {
                localStorage.setItem("user", user.uid);
            }
        } else {
            dispatch(getUserData(null));
            if (isRemembered === false) {
                localStorage.removeItem("user");
            }
        }
    });
};

export const signUpWithEmail = (email, password, confirmPasswordValue) => (
    dispatch
) => {
    if (password !== confirmPasswordValue) {
        dispatch(getError("Passwords must match"));
    } else {
        dispatch(loadingAuth(true));
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                dispatch(getError(error));
            })
            .then(() => dispatch(setIsAuth(true)))
            .then(() => dispatch(loadingAuth(false)));
    }
};
