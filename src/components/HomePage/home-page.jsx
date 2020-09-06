import React from "react";
import DiscountOffer from "./DiscountOffer/discount-offer";
import CompanyOffers from "./CompanyOffers/company-offers";
import CurrentBestsellers from "./Bestsellers/current-bestsellers";
import TopRatedBooks from "./TopRated/top-rated";
import TopThree from "./Top3/top3";
import LimitedOffer from "./LimitedTimeOffer/limited-offer";
import LatestNews from "./LatestNews/latest-news";
import HappyCustomers from "./HappyCustomers/happy-customers";
import Video from "./Video/video";
import SiteStat from "./SiteStat/site-stat";

const HomePage = ({
    booksData,
    newsData,
    addToWishlist,
    addToShoppingCart,
    removeFromWishList,
    changeDiscountStatus
}) => {
    return (
        <>
            <DiscountOffer changeDiscountStatus={changeDiscountStatus}/>
            <CompanyOffers />
            <CurrentBestsellers
                booksData={booksData}
                addToWishlist={addToWishlist}
                addToShoppingCart={addToShoppingCart}
                removeFromWishList={removeFromWishList}
            />
            <TopRatedBooks
                booksData={booksData}
                addToWishlist={addToWishlist}
                addToShoppingCart={addToShoppingCart}
                removeFromWishList={removeFromWishList}
            />
            <TopThree booksData={booksData} />
            <LimitedOffer
                booksData={booksData}
                addToWishlist={addToWishlist}
                addToShoppingCart={addToShoppingCart}
                removeFromWishList={removeFromWishList}
            />
            <LatestNews newsData={newsData} />
            <HappyCustomers />
            <Video />
            <SiteStat />
        </>
    );
};

export default HomePage;
