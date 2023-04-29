import CouponActionTypes from "./coupon.types"
 
export const checkCoupon = coupon => ({
    type: CouponActionTypes.CHECK_COUPON,
	payload: coupon
});

export const fetchCouponsStart = () => ({
    type: CouponActionTypes.FETCH_COUPON_START
})

export const fetchCouponsSuccess = couponMaps => ({
    type: CouponActionTypes.FETCH_COUPON_SUCCESS,
    payload: couponMaps 
})

export const fetchCouponsFailure = errorMassage => ({
    type: CouponActionTypes.FETCH_COUPON_FAIL,
    payload: errorMassage
})

