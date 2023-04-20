export const getDiscount = (listCoupon, couponToApply) => {
	if (listCoupon[couponToApply]) {
		return listCoupon[couponToApply];
	} else {
		return 0;
	}
}
