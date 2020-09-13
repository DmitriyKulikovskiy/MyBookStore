import { questions } from "../components/FAQ/questions"

const PUT_REVIEW_SUPPORT = 'PUT_REVIEW_SUPPORT'
const CHANGE_STATUS = 'CHANGE_STATUS'

const initialState = {
    supportReview: [],
    faq: questions
}

const otherReducer = (state = initialState, action) => {
    switch(action.type){
        
        case PUT_REVIEW_SUPPORT:
            let review = {
                firstName: action.firstName,
                lastName: action.lastName,
                message: action.message
            }
            return {
                ...state,
                supportReview: [...state.supportReview, review]
            }

        case CHANGE_STATUS:
            return {
                ...state,
                faq: state.faq.map(el => el.id === action.id ? {...el, status: !el.status} : el)
            }
       
        default:
            return state
    }
}


export const addSupportReview = (firstName,lastName,message) => ({type: 'PUT_REVIEW_SUPPORT', firstName,lastName,message})
export const changeStatusFAQ = (id) => ({type: 'CHANGE_STATUS', id})


export default otherReducer