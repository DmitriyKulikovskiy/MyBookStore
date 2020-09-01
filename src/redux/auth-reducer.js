
const GET_USER_DATA = 'GET_USER_DATA'
const GET_EMAIL_VALUE = 'GET_EMAIL_VALUE'
const GET_PASSWORD_VALUE = 'GET_PASSWORD_VALUE'
const CONFIRM_PASSWORD_VALUE = 'CONFIRM_PASSWORD_VALUE'
const SHOW_LOGIN_ERROR = 'SHOW_LOGIN_ERROR'
const REMEMBER_ME_STATUS = 'REMEMBER_ME_STATUS'
const IS_LOADING = 'IS_LOADING'
const GET_USER_EMAIL = 'GET_USER_EMAIL'
const IS_AUTH_STATUS = 'IS_AUTH_STATUS'

const initialState = {
    user: '',
    email: '',
    password: '',
    confirmPasswordValue: '',
    isRemembered: false,
    error: '',
    isLoading: false,
    userEmail: '',
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER_DATA: 
            return {
                ...state,
                user: action.value
            }
        

        case GET_EMAIL_VALUE: 
            return {
                ...state,
                email: action.value
            }
        

        case GET_PASSWORD_VALUE: 
            return {
                ...state,
                password: action.value
            }

        case SHOW_LOGIN_ERROR:
            return {
                ...state,
                error: action.value
            }
        
        case CONFIRM_PASSWORD_VALUE:
            return {
                ...state,
                confirmPasswordValue: action.value
            }

        case REMEMBER_ME_STATUS: 
            return {
                ...state,
                isRemembered: !state.isRemembered
            }
             
        case IS_LOADING: 
            return {
                ...state,
                isLoading: action.isLoading
            }
        
        case GET_USER_EMAIL:
            return {
                ...state,
                userEmail: action.userEmail
            }

        case IS_AUTH_STATUS:
            return{
                ...state,
                isAuth: action.isAuth
            }

        default:
            return state
    }
}

export const getUserData = (value) => ({type: 'GET_USER_DATA',value})
export const getEmail = (value) => ({type: 'GET_EMAIL_VALUE', value})
export const getPassword = (value) => ({type: 'GET_PASSWORD_VALUE', value})
export const confirmPassword = (value) => ({type: 'CONFIRM_PASSWORD_VALUE', value})
export const getError = (value) => ({type: 'SHOW_LOGIN_ERROR',value})
export const changeRememberStatus = () => ({type: 'REMEMBER_ME_STATUS'})
export const loadingAuth = (isLoading) => ({type: 'IS_LOADING',isLoading})
export const getUserEmail = (userEmail) => ({type: 'GET_USER_EMAIL', userEmail})
export const setIsAuth = (isAuth) => ({type: 'IS_AUTH_STATUS', isAuth})

export default authReducer