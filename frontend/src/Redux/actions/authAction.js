// import { AUTH } from '../constants/actionTypes';
import * as api from '../../api/index.js';
import { AUTH, AUTH_FAIL } from '../constants/cardConstant.js';

import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    localStorage.setItem('authData', JSON.stringify(data));
    toast.success("You have successfully signed in!!!", {
      position: 'center-left'
    })
    // router.push('/selectionpage');
  } catch (error) {
    const message =
			error.response && error.response.data.message
				? error.response.data.message
        : error.message;
        dispatch({ type: AUTH_FAIL, payload: message });

        toast.error(` ${message} `, {
          position: 'top-left'
        })
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    toast.error("You have successfully signed in!!!", {
      position: 'top-left'
    })

    // router.push('/');
  } catch (error) {
    const message =
			error.response && error.response.data.message
				? error.response.data.message
        : error.message;
        dispatch({ type: AUTH_FAIL, payload: message });

        toast.error(` ${message} `, {
          position: 'top-left'
        })
  }


};


