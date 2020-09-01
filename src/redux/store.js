import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import authReducer from "./auth-reducer";
import homeReducer from "./books-reducer";
import booksPageReducer from "./booksPage-reducer"

// const saveToLocalStorage = state => {
//     try {
//         let serializedState = JSON.stringify(state)
//         localStorage.setItem('state', serializedState)
//     } catch(e) {
//         console.log(e)
//     }
// }

// const loadFromLocalStorage = () => {
//     try{
//         let serializedState = localStorage.getItem('state')
//         if(serializedState === null) return undefined
//         return JSON.parse(serializedState)
//     }catch(e) {
//         console.log(e)
//         return undefined
//     }
// }

const reducers = combineReducers({
    authReducer,
    homeReducer,
    booksPageReducer
})

// const persistedState = loadFromLocalStorage()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))  //persistedState


// store.subscribe( () => saveToLocalStorage(store.getState()) )

export default store