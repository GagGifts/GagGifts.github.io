import CouponActionTypes from './coupon.types';
import {getDiscount} from './coupon.utils';

const INITIAL_STATE = {
	isFetching: false,
	errorMassage: undefined,
	coupon: null,
	discount: null,
	nameCoupon: '',
};

const couponReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CouponActionTypes.CHECK_COUPON:
			return {
				...state,
				discount: getDiscount(state.coupon, action.payload),
				nameCoupon: action.payload,
			};
		

		case CouponActionTypes.FETCH_COUPON_START:
			return {
				...state,
				isFetching: true
			};
		

		case CouponActionTypes.FETCH_COUPON_SUCCESS: 
			return {
				...state,
				isFetching: false,
				coupon: action.payload,
			};

		case CouponActionTypes.FETCH_COUPON_FAIL: 
			return {
				...state,
				isFetching: false,
				errorMassage: action.payload,
			};

		default: 
			return state;
	}
};

export default couponReducer;
