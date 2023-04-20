import { createSelector } from "reselect";

const selectCoupon = ({ coupon }) => coupon;


export const selectDiscount = createSelector(
    [selectCoupon],
    ({ discount }) => discount
);

