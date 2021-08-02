import {
	ADD_TO_CART,
	REDUCE_QUANTITY,
	REMOVE_FROM_CART,
} from "../constants/cartConstants";

const carttReducer = (
	state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
	action
) => {
	switch (action.type) {
		case ADD_TO_CART:
			return { cartItems: action.payload.cartItems };
		case REMOVE_FROM_CART:
			return { cartItems: action.payload.cartItems };

		case REDUCE_QUANTITY:
		return { cartItems: action.payload.cartItems };
		default:
			return state;
	}
};

export default carttReducer;
