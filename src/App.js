import React from "react";
import LoginContainer from "./containers/login-container";
import { Route, Redirect } from "react-router-dom";
import HeaderNavContainer from "./containers/header-container";
import { connect } from "react-redux";
import HomeContainer from "./containers/home-container";
import Footer from "./components/Footer/footer";
import AddedToCart from "./components/HomePage/HomeModalScreens/added-to-cart";
import { changeStatusCartModal } from "./redux/books-reducer";
import SelectedBookContainer from "./containers/selected-book-container";
import BookPageContainer from "./containers/book-page-container";

const App = ({ isAuth, statusCartModal, cartModalBook, shoppingCart,changeStatusCartModal }) => {
    // const verifyIsAuth = isAuth === true

    return (
        <div className="App">
            {/* <Route path='/LoginPage' render={() => <LoginContainer/>} /> */}
            {statusCartModal === true ? (
                <AddedToCart
                    cartModalBook={cartModalBook}
                    shoppingCart={shoppingCart}
                    changeStatusCartModal={changeStatusCartModal}
                />
            ) : null}
            <HeaderNavContainer />
            <Route path="/Home" render={() => <HomeContainer />} />
            <Route path='/Book/:id' render={({ match }) => <SelectedBookContainer match={match} />}/>
            <Route path="/Books" render={() => <BookPageContainer />} />
            <Footer />
        </div>
    );
};

//get data
const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    statusCartModal: state.homeReducer.statusCartModal,
    cartModalBook: state.homeReducer.cartModalBook,
    shoppingCart: state.homeReducer.shoppingCart,
});

const AppContainer = connect(mapStateToProps,{changeStatusCartModal})(App);

export default AppContainer;
