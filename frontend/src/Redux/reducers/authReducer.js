import { AUTH, AUTH_FAIL, LOGOUT } from "../constants/cardConstant";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const authReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		case AUTH:
			localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

			// toast.success("you successfully logged in", { position: "top-left" });


			return { ...state, authData: action.data, loading: false, errors: null };


		case AUTH_FAIL:
			return { loading: false, error: action.payload };

		case LOGOUT:
			localStorage.clear();
				 // toast.success("you successfully logged in", { position: "top-left" }
			toast.success("you successfully logged out, please come back soon!!!", { position: "top-left" });
			return { ...state, authData: null, loading: false, errors: null };

		default:
			return state;
	}
};

export default authReducer;
