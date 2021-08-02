import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./Redux/reducers/cardReducer";
import authReducer from "./Redux/reducers/authReducer";
import productListReducer from "./Redux/reducers/productReducers";
import { productDetailsReducer } from "./Redux/reducers/productDetailsReducer";
import carttReducer from "./Redux/reducers/cartReducer";


const reducer = combineReducers({
	card: cartReducer,
	auth: authReducer,
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: carttReducer 

});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
