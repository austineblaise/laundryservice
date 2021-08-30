// import {
//     ORDER_CREATE_FAIL,
//     ORDER_CREATE_REQUEST,
//     ORDER_CREATE_RESET,
//     ORDER_CREATE_SUCCESS,
//   } from '../constants/orderConstants';

import { CLEAR_ORDER, FETCH_ORDERS, ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_RESET, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS } from "../constants/orderConstants";

  
  export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case ORDER_CREATE_REQUEST:
        return { loading: true };
      case ORDER_CREATE_SUCCESS:
        return { loading: false, success: true, order: action.payload };
      case ORDER_CREATE_FAIL:
        return { loading: false, error: action.payload };
        case FETCH_ORDERS:
      return { orders: action.payload };
      case CLEAR_ORDER:
        return {order: null};
      default:
        return state;
    }
  };





  export const orderDetailsReducer = (state = { orders: {} }, action) => {
    switch (action.type) {

        case ORDER_DETAILS_REQUEST:
            return {
                loading: true
            }

        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }

        case ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        

        default:
            return state;
    }
}