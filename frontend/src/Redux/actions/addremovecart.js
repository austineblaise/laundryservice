import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	REDUCE_QUANTITY,
	SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";
import axios from "axios";

import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addToCart = (product) => (dispatch, getState) => {
	// const { data } = await axios.get(`/api/products/${productId}`)

	// dispatch({
	//     type: ADD_TO_CART,
	//     payload: {
	//         product: data.product._id,
	//         name: data.product.name,
	//         price: data.product.price,

	//         stock: data.product.stock,
	//         quantity
	//     }
	// })
	//document

	// localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

	const cartItems = getState().cart.cartItems.slice();
	let alreadyExists = false;
	cartItems.forEach((x) => {
		if (x._id === product._id) {
			alreadyExists = true;
			x.count++;

			toast.info(`increased ${product.name} Cart Quantity`, {
				position: 'bottom-left'
			})

		}
	});
	if (!alreadyExists) {
		cartItems.push({ ...product, count: 1 });
		toast.success(`${product.name} added to cart`, {
			position: 'bottom-left'
		})
	}
	dispatch({
		type: ADD_TO_CART,
		payload: { cartItems },
	});
	localStorage.setItem("cartItems", JSON.stringify(cartItems));
	// localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// export const addToCart = (id, quantity) => async (dispatch, getState) => {
// 	const { data } = await axios.get(`/api/products/${id}`);

// 	dispatch({
// 		type: ADD_TO_CART,
// 		payload: {
// 			product: data._id,
// 			name: data.name,
// 			price: data.price,

// 			stock: data.stock,
// 			quantity,
// 		},
// 	});

// 	localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

export const removeFromCart = (product) => (dispatch, getState) => {
	const cartItems = getState()
		.cart.cartItems.slice()
		.filter((x) => x._id !== product._id);
	dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
	localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const reduceQuantity = (product) => (dispatch, getState) => {
	const cartItems = getState().cart.cartItems.slice();

	let alreadyExists = false;
	cartItems.forEach((x) => {
		if (x._id === product._id) {
			alreadyExists = true;
			x.count--;
		}

		// if (x.count <= 1) return;
	});
	if (!alreadyExists) {
		cartItems.push({ ...product, count: 1 });
	}
	dispatch({
		type: REDUCE_QUANTITY,
		payload: { cartItems },
	});
	localStorage.setItem("cartItems", JSON.stringify(cartItems));
	// localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = (data) => async (dispatch) => {
	dispatch({
		type: SAVE_SHIPPING_INFO,
		payload: data,
	});

	localStorage.setItem("shippingInfo", JSON.stringify(data));

	// localStorage.setItem('shippingInfo', JSON.stringify(data))
};

//REDUCE_QUANTITY
