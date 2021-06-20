import { combineReducers } from "redux";
import productReducer from './productReducer'
import userReducer from './userReducer'
const rootReducer = combineReducers ({
    products: productReducer,
    carts : userReducer 
})

export default rootReducer