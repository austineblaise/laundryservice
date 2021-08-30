import {
	ADD_TO_CART,
	CART_EMPTY,
	REDUCE_QUANTITY,
	REMOVE_FROM_CART,
	SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";

const carttReducer = (
	state = {
		cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
		shippingInfo: {},
	},
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
			return { ...state, shippingInfo: action.payload };
		case CART_EMPTY:
			return { ...state, cartItems: [] };
		default:
			return state;
	}
};

export default carttReducer;

// const cartReducer = (state = { cartItems: [] }, action) => {
// 	switch (action.type) {
// 	  case ADD_TO_CART:
// 		const item = action.payload;
// 		const existItem = state.cartItems.find((x) => x.product === item.product);
// 		if (existItem) {
// 		  return {
// 			...state,
// 			error: '',
// 			cartItems: state.cartItems.map((x) =>
// 			  x.product === existItem.product ? item : x
// 			),
// 		  };
// 		} else {
// 		  return { ...state, error: '', cartItems: [...state.cartItems, item] };
// 		}
// 	  case REMOVE_FROM_CART:
// 		return {
// 		  ...state,
// 		  error: '',
// 		  cartItems: state.cartItems.filter((x) => x.product !== action.payload),
// 		};
// 	  case SAVE_SHIPPING_INFO:
// 		return { ...state, shippingAddress: action.payload };
// 	//   case CART_SAVE_PAYMENT_METHOD:
// 	// 	return { ...state, paymentMethod: action.payload };
// 	//   case CART_ADD_ITEM_FAIL:
// 	// 	return { ...state, error: action.payload };
// 	  case CART_EMPTY:
// 		return { ...state, error: '', cartItems: [] };
// 	  default:
// 		return state;
// 	}
//   };

//   export default cartReducer;
