  
import React from 'react'
import { connect } from 'react-redux';
import HeaderNav from '../components/HeaderNav/header-nav'
import { getUserEmail,setIsAuth } from '../redux/auth-reducer';

class HeaderNavContainer extends React.Component {
    render(){
        return (
            <HeaderNav {...this.props} />
        )
        
    }
}


const mapStateToProps = (state) => {
    return {
        userEmail: state.homeReducer.userEmail,
        isAuth: state.homeReducer.isAuth
    }
}


export default connect(mapStateToProps, {getUserEmail,setIsAuth})(HeaderNavContainer)