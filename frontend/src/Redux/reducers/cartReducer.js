import {
	ADD_TO_CART,
	CART_EMPTY,
	INCREASE_QUANTITY,
	REDUCE_QUANTITY,
	REMOVE_FROM_CART,
	SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";

import { toast } from "react-toastify";

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
			const itemIndex = state.cartItems.findIndex(
				(item) => item._id === action.payload._id
			);

			if (state.cartItems[itemIndex].count > 1) {
				state.cartItems[itemIndex].count -= 1;

				toast.info(`Decreased ${state.cartItems[itemIndex].name} quantity`, {
					position: "bottom-left",
				});
			} else if (state.cartItems[itemIndex].count === 1) {
				const nextCartItems = state.cartItems.filter(
					(item) => item._id !== action.payload._id
				);

				state.cartItems = nextCartItems;

				toast.error(`${state.cartItems[itemIndex].name} removed from cart`, {
					position: "bottom-left",
				});
				localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
			}

			return { ...state, ...action.payload.cartItems };

		case INCREASE_QUANTITY:
			const existingIndex = state.cartItems.findIndex(
				(item) => item._id === action.payload._id
			);

			if (existingIndex >= 0) {
				state.cartItems[existingIndex] = {

					...state.cartItems[existingIndex],
					count: state.cartItems[existingIndex].count + 1,
				};
				toast.info(`Increased ${state.cartItems[existingIndex].name} quantity`, {
					position: "bottom-left",
				});
			} else {
				let tempProductItem = { ...action.payload, count: 1 };
				state.cartItems.push(tempProductItem);
				toast.success(`${state.cartItems[existingIndex].name} added to cart`, {
					position: "bottom-left",
				});
				localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
			}

			return { ...state, ...action.payload.cartItems };
			

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
