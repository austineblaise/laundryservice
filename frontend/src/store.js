import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./Redux/reducers/cardReducer";
import authReducer from "./Redux/reducers/authReducer";

const reducer = combineReducers({
	card: cartReducer,
	auth: authReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
