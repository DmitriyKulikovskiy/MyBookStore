  
import React from 'react'
import { connect } from 'react-redux';
import HeaderNav from '../components/HeaderNav/header-nav'
import { getUserEmail,setIsAuth } from '../redux/auth-reducer';
import { searchBook,clearResult } from '../redux/books-reducer';

class HeaderNavContainer extends React.Component {
    render(){
        return (
            <HeaderNav {...this.props} />
        )
        
    }
}


const mapStateToProps = (state) => {
    return {
        userEmail: state.authReducer.userEmail,
        isAuth: state.authReducer.isAuth,
        searchQuery: state.homeReducer.searchQuery,
        booksData: state.homeReducer.booksData
    }
}


export default connect(mapStateToProps, {getUserEmail,setIsAuth,searchBook,clearResult})(HeaderNavContainer)