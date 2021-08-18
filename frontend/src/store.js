import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./Redux/reducers/cardReducer";
import authReducer from "./Redux/reducers/authReducer";
import productListReducer from "./Redux/reducers/productReducers";
import { productDetailsReducer } from "./Redux/reducers/productDetailsReducer";
import carttReducer from "./Redux/reducers/cartReducer";
import {orderCreateReducer} from "./Redux/reducers/orderReducers"


const reducer = combineReducers({
	card: cartReducer,
	auth: authReducer,
	productList: productListReducer,
	productDetails: productDetailsReducer,
    cart: carttReducer ,
    orderCreate: orderCreateReducer

});


// const initialState = {
//     userSignin: {
//       userInfo: localStorage.getItem('userInfo')
//         ? JSON.parse(localStorage.getItem('userInfo'))
//         : null,
//     },

let initialState = {
    auth: {
        authData: localStorage.getItem('authData')
          ? JSON.parse(localStorage.getItem('authData'))
          : null,
      },
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}
// const initialState = {
// 	cart: {
// 		cartItems: loc
// 	}
// };

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
