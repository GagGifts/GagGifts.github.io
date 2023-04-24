import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { checkCoupon } from '../../redux/coupon/coupon.actions'

import { selectDiscount } from '../../redux/coupon/coupon.selectors'

import FormInput from '../form-input/form-input.component';

import { CouponButtonContainer, CouponContainer, TextContainer } from './coupon.styles';

const defaultFields = {
  coupon: '',
};

const Coupon = () => {
	const dispatch = useDispatch();
	const discount = useSelector(selectDiscount)
	const [formFields, setFormFields] = useState(defaultFields);
	const { coupon  } = formFields
	const handleChange = event => {
		const {name, value} = event.target;
		setFormFields({...formFields, [name]: value});
	};


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
				<CouponButtonContainer onClick={() => dispatch(checkCoupon(coupon))} > APPLY </CouponButtonContainer>
			</form>
		</CouponContainer>
	);
};

export default Coupon;
