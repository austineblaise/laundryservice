import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	REDUCE_QUANTITY,
	SAVE_SHIPPING_INFO,
	INCREASE_QUANTITY,
	CLEAR_ITEMS,
	CART_EMPTY,
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
				position: "bottom-left",
			});
		}
	});
	if (!alreadyExists) {
		cartItems.push({ ...product, count: 1 });
		toast.success(`${product.name} added to cart`, {
			position: "bottom-left",
		});
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

	toast.error(`${product.name} removed from Cart`, { position: "bottom-left" });
};


export const increaseCart = (product) => ({
	type: INCREASE_QUANTITY,
	payload: product,
  });



export const decreaseCartt = (product) => ({
	type: REDUCE_QUANTITY,
	payload: product,
  });



  export const clearItems = () => ({
	type: CART_EMPTY,
	
  });


  


  // INCREASE_QUANTITY

// export const decreaseCartt = (product) => (dispatch, getState) => {
// 	// const cartItems = getState().cart.cartItems.slice();

// 	// let alreadyExists = false;
// 	// // eslint-disable-next-line array-callback-return
// 	// cartItems.map((x) => {
// 	// 	if (x._id === product._id) {
// 	// 		alreadyExists = true;
// 	// 		x.count--;
// 	// 		toast.info("Decreased product quantity", {
// 	// 			position: "bottom-left",
// 	// 		});
// 	// 	}

// 	// 	const exist = cartItems.find((x) => x._id === product._id);
		
// 	// 	if (exist.count === 1) {
// 	// 		cartItems.filter((x) => x._id !== product._id);

// 	// 		toast.error("Product removed from cart", {
// 	// 			position: "bottom-left",
// 	// 		  });
// 	// 	  }

// 		 //im a programmer i dont have life, my corde just 

// 	// });

// 	dispatch({
// 		type: REDUCE_QUANTITY,
// 		payload: product,
// 	});
// 	// localStorage.setItem("cartItems", JSON.stringify(cartItems));

// };

export const saveShippingInfo = (data) => async (dispatch) => {
	dispatch({
		type: SAVE_SHIPPING_INFO,
		payload: data,
	});

	localStorage.setItem("shippingInfo", JSON.stringify(data));

	// localStorage.setItem('shippingInfo', JSON.stringify(data))
};

// //REDUCE_QUANTITY
