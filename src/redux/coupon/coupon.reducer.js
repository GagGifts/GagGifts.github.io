import CouponActionTypes from "./coupon.types";
import { getDiscount } from "./coupon.utils"

const INITIAL_STATE = {
	coupon: {
		"GROUP14" : 20,
		"GAGGIFT" : 10 
	},
	discount: 0 
};

const couponReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
		case CouponActionTypes.CHECK_COUPON:
            return {
                ...state,
                discount: getDiscount(state.coupon, action.payload) 
            };
        default:
            return state;
    }
};

export default couponReducer;
