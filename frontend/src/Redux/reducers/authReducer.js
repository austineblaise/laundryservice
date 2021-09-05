import { AUTH, AUTH_FAIL, LOGOUT } from "../constants/cardConstant";

const authReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		case AUTH:
			localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

			return { ...state, authData: action.data, loading: false, errors: null };

		case AUTH_FAIL:
			return { loading: false, error: action.payload };

		case LOGOUT:
			localStorage.clear();

			return { ...state, authData: null, loading: false, errors: null };

		default:
			return state;
	}
};

export default authReducer;
