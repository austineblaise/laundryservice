import {
	ADD_TO_CART,
	CART_EMPTY,
	REDUCE_QUANTITY,
	REMOVE_FROM_CART,
	SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";

const carttReducer = (
	state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]" ) , shippingInfo: {} },
	action
) => {
	switch (action.type) {
		case ADD_TO_CART:
			return { cartItems: action.payload.cartItems };
		case REMOVE_FROM_CART:
			return { cartItems: action.payload.cartItems };

		case REDUCE_QUANTITY:
		return { cartItems: action.payload.cartItems };
		
		case SAVE_SHIPPING_INFO:
			return {...state, shippingInfo: action.payload}
		case CART_EMPTY: 
		return {...state, cartItems: []}
		default:
			return state;
	}
};

export default carttReducer;
