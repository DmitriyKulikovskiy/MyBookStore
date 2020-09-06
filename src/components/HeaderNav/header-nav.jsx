import React from "react";
import Header from "./Header/header";
import Navbar from "./Navbar/navbar";

const HeaderNav = ({
    userEmail,
    getUserEmail,
    setIsAuth,
    isAuth,
    searchBook,
    searchQuery,
    booksData,
    clearResult
}) => {
    return (
        <>
            <Header
                userEmail={userEmail}
                getUserEmail={getUserEmail}
                setIsAuth={setIsAuth}
                isAuth={isAuth}
                searchBook={searchBook}
                searchQuery={searchQuery}
                booksData={booksData}
                clearResult={clearResult}
            />
            <Navbar />
        </>
    );
};

export default HeaderNav;
