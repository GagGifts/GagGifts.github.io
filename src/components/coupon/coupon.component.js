import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItemsTotal } from '../../redux/cart/cart.selectors';

import { checkCoupon } from '../../redux/coupon/coupon.actions'

import { selectDiscount, selectNameCoupon } from '../../redux/coupon/coupon.selectors'

import FormInput from '../form-input/form-input.component';

import { CouponButtonContainer, CouponContainer, TextContainer } from './coupon.styles';

const defaultFields = {
	coupon: '',
};

const Coupon = () => {
	const dispatch = useDispatch();
	const nameCoupon = useSelector(selectNameCoupon)
	const discount = useSelector(selectDiscount)
	const total = useSelector(selectCartItemsTotal)
	const [formFields, setFormFields] = useState(defaultFields);
	const { coupon } = formFields
	const handleChange = event => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	let totalReduced = 0;
	const now = new Date();

	if (discount != null) {
		if (discount.isPercentDiscount) {
			totalReduced = (total * discount.discount).toFixed(2);
		} else {
			totalReduced = discount.discount.toFixed(2);
		}
	}


	return (
		<CouponContainer>
			<form>
				<FormInput
					type='text'
					name='coupon'
					onChange={handleChange}
					value={coupon}
					label='Coupon'
					required
					coupon
				/>
				{
					discount != null
						? (discount.expirationDate.seconds < now.getTime() / 1000)
							? (<TextContainer>Sorry, the Coupon You Entered has Expired.</TextContainer>)
							: <TextContainer>{nameCoupon} was Successfully Applied. Your Total has Been Reduced by ${totalReduced}</TextContainer>
						: <TextContainer></TextContainer>
				}
				<CouponButtonContainer onClick={() => dispatch(checkCoupon(coupon))} > APPLY </CouponButtonContainer>
			</form>
		</CouponContainer>
	);
};

export default Coupon;
