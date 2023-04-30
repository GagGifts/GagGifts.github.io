import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectCartItemsTotal, selectCartItems } from '../../redux/cart/cart.selectors'
import { selectDiscount } from '../../redux/coupon/coupon.selectors'

import { fetchCouponsStart } from '../../redux/coupon/coupon.actions'

import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import {
	CheckOutContainer,
	HeaderBlockContainer,
	CheckOutHeader,
	TotalContainer,
	TextWarningContainer,
	CouponContainer
} from './check-out.styles'

const CheckOut = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCouponsStart());
	});
	const total = useSelector(selectCartItemsTotal)
	const cartItems = useSelector(selectCartItems)
	const coupon = useSelector(selectDiscount)
	const now = new Date();
	let totalToCheckout = 0
	if (coupon != null) {
		if (coupon.expirationDate.seconds < now.getTime() / 1000) {
			totalToCheckout = total.toFixed(2);
		} else if (coupon.isPercentDiscount) {
			totalToCheckout = (total - (total * coupon.discount)).toFixed(2);
		} else {
			totalToCheckout = (total - coupon.discount).toFixed(2);
		}
	} else {
		totalToCheckout = total.toFixed(2);
	}
	return (
		<CheckOutContainer>
			<CheckOutHeader>
				<HeaderBlockContainer>
					<span>Product</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Description</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Quantity</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Price</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Remove</span>
				</HeaderBlockContainer>
			</CheckOutHeader>
			{
				cartItems.map(cartItem =>
					<CheckOutItem
						key={cartItem.id}
						cartItem={cartItem}
					/>
				)
			}
			<CouponContainer />
			<TotalContainer className='total'>Total ${totalToCheckout}</TotalContainer>
			<TextWarningContainer className='test-warning'>
				*please use the following test credit cart for payments*
				<br />
				4242-4242-4242-4242 - Exp: 09/26 - CVC:127
			</TextWarningContainer>
			<StripeCheckoutButton price={totalToCheckout} />
		</CheckOutContainer>
	)
}


export default CheckOut;
