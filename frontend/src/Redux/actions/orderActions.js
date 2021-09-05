import axios from "axios";
import { AUTH_FAIL } from "../constants/cardConstant";
import { CART_EMPTY } from "../constants/cartConstants";
import {
	CLEAR_ORDER,
	FETCH_ORDERS,
	ORDER_CREATE_FAIL,
	ORDER_CREATE_REQUEST,
	ORDER_CREATE_SUCCESS,
	ORDER_DETAILS_FAIL,
	ORDER_DETAILS_REQUEST,
	ORDER_DETAILS_SUCCESS,
} from "../constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState) => {
	try {
		dispatch({ type: ORDER_CREATE_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},

			body: JSON.stringify(order),
		};

		const { data } = await axios.post("/api/orders", order, config);

		dispatch({
			type: ORDER_CREATE_SUCCESS,
			payload: data,
		});

		// dispatch({ type: CART_EMPTY });
		// localStorage.removeItem("cartItems");
	} catch (error) {
		// dispatch({
		//     type: ORDER_CREATE_FAIL,
		//     payload: error.response.data.message
		// })

		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: ORDER_CREATE_FAIL, payload: message });
	}
};

export const getOrderDetails = (orderId) => async (dispatch, getState) => {
	try {
		dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });

		const { data } = await axios.get(`/api/orders/${orderId}`);

		dispatch({
			type: ORDER_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: AUTH_FAIL, payload: message });
	}
};

export const clearOrder = () => (dispatch) => {
	dispatch({ type: CLEAR_ORDER });
};

// export const fetchOrders = () => (dispatch) => {
// 	fetch("/api/orders")
// 	  .then((res) => res.json())
// 	  .then((data) => {
// 		dispatch({ type: FETCH_ORDERS, payload: data })
// dispatch({type: CART_EMPTY })
// 	  });
//   };
