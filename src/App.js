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
import ShoppingCartContainer from "./containers/shopping-cart-container";
import WishlistContainer from "./containers/wishlist-container";
import CheckOutContainer from "./containers/check-out-container";
import { changeDiscountStatus } from "./redux/checkOut-reducer";
import GetDiscount from "./components/HomePage/HomeModalScreens/get-discount";
import UserPageContainer from "./containers/user-page-container";
import NewsContainer from "./containers/news-container";
import CurrentNewsContainer from "./containers/current-news-container";
import ContactUs from "./components/ContacUs/contact-us";
import { addSupportReview, changeStatusFAQ } from "./redux/other-reducer";
import AboutUs from "./components/AboutUs/about-us";
import SaleComponent from "./components/Sale/sale";
import FAQ from "./components/FAQ/faq";

const App = ({
    statusCartModal,
    cartModalBook,
    shoppingCart,
    changeStatusCartModal,
    discountStatus,
    changeDiscountStatus,
    addSupportReview,
    supportReview,
    changeStatusFAQ,
    faq,
}) => {

    return (
        <div className="App">
            <Route path={['/', '/LoginPage']} exact render={() => <LoginContainer />} />

            <>
                {statusCartModal === true ? (
                    <AddedToCart
                        cartModalBook={cartModalBook}
                        shoppingCart={shoppingCart}
                        changeStatusCartModal={changeStatusCartModal}
                    />
                ) : null}
                {discountStatus === true ? (
                    <GetDiscount changeDiscountStatus={changeDiscountStatus} />
                ) : null}
                <HeaderNavContainer />
                <Route
                    path="/ShoppingCart"
                    render={() => <ShoppingCartContainer />}
                />
                <Route path="/UserPage" render={() => <UserPageContainer />} />
                <Route
                    path="/ProceedToCheckOut"
                    render={() => <CheckOutContainer />}
                />
                <Route path="/WishList" render={() => <WishlistContainer />} />
                <Route path="/Home" render={() => <HomeContainer />} />
                <Route
                    path="/ContactUs"
                    render={() => (
                        <ContactUs
                            addSupportReview={addSupportReview}
                            supportReview={supportReview}
                        />
                    )}
                />
                <Route path="/AllNews" render={() => <NewsContainer />} />
                <Route path="/AboutUs" render={() => <AboutUs />} />
                <Route path="/Sale" render={() => <SaleComponent />} />
                <Route
                    path="/FAQ"
                    render={() => (
                        <FAQ changeStatusFAQ={changeStatusFAQ} faq={faq} />
                    )}
                />
                <Route
                    path="/Book/:id"
                    render={({ match }) => (
                        <SelectedBookContainer match={match} />
                    )}
                />
                <Route
                    path="/CurrentNews/:id"
                    render={({ match }) => (
                        <CurrentNewsContainer match={match} />
                    )}
                />
                <Route path="/Books" render={() => <BookPageContainer />} />
                <Footer />
            </>
        </div>
    );
};

//get data
const mapStateToProps = (state) => ({
    statusCartModal: state.homeReducer.statusCartModal,
    cartModalBook: state.homeReducer.cartModalBook,
    shoppingCart: state.homeReducer.shoppingCart,
    discountStatus: state.checkOutReducer.discountStatus,
    supportReview: state.otherReducer.supportReview,
    faq: state.otherReducer.faq,
});

const AppContainer = connect(mapStateToProps, {
    changeStatusCartModal,
    changeDiscountStatus,
    addSupportReview,
    changeStatusFAQ,
})(App);

export default AppContainer;
