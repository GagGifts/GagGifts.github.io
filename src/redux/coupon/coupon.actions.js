import CouponActionTypes from "./coupon.types"
 
export const checkCoupon = coupon => ({
    type: CouponActionTypes.CHECK_COUPON,
	payload: coupon
});

