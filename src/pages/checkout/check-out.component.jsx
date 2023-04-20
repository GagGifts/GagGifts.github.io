import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItemsTotal, selectCartItems } from '../../redux/cart/cart.selectors'
import {selectDiscount} from '../../redux/coupon/coupon.selectors'

import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import Coupon from '../../components/coupon/coupon.component'

import {
	CheckOutContainer,
	HeaderBlockContainer,
	CheckOutHeader,
	TotalContainer,
	TextWarningContainer,
	CouponContainer
} from './check-out.styles'

const CheckOut = () => {
	const total = useSelector(selectCartItemsTotal)
	const cartItems = useSelector(selectCartItems)
	const discount = useSelector(selectDiscount)
	let totalToCheckout = 0
	if (discount != 0) {
		totalToCheckout = total - (total * discount / 100)
	} else {
		totalToCheckout = total
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
		<CouponContainer/>
		 <TotalContainer className='total'>Total ${totalToCheckout}</TotalContainer>
			<TextWarningContainer className='test-warning'>
				*please use the following test credit cart for payments*
				<br/>
				4242-4242-4242-4242 - Exp: 20/01 - CVV:123
			</TextWarningContainer>
			<StripeCheckoutButton price={totalToCheckout}/>
		</CheckOutContainer>
	)
}


export default CheckOut;
