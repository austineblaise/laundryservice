import { ADD_TO_CART } from "../constants/cartConstants";
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from "../constants/productConstants";


const productListReducer = (state = {products: [] }, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true };
		case PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload };
		case PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload };

			// case ADD_TO_CART:
			// 	return {count: action.payload};
		default:
			return state;
	}
};

export default productListReducer;
