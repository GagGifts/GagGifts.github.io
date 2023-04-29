import { createSelector } from "reselect";

const selectCoupon = ({ coupon }) => coupon;


export const selectDiscount = createSelector(
    [selectCoupon],
    ({ discount }) => discount
);

export const selectNameCoupon = createSelector(
    [selectCoupon],
    ({ nameCoupon }) => nameCoupon 
);


