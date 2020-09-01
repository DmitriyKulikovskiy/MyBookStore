import React from 'react'
import Header from './Header/header'
import Navbar from './Navbar/navbar'

const HeaderNav = ({userEmail,getUserEmail,setIsAuth,isAuth}) => {

    return (
        <>
            <Header userEmail={userEmail} getUserEmail={getUserEmail} setIsAuth={setIsAuth} isAuth={isAuth} />
            <Navbar />
        </>
    )
}

export default HeaderNav