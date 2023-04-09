import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItemsTotal, selectCartItems } from '../../redux/cart/cart.selectors'

import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import {
    CheckOutContainer,
    HeaderBlockContainer,
    CheckOutHeader,
    TotalContainer,
    TextWarningContainer,
} from './check-out.styles'

const CheckOut = ({ total, cartItems }) => (
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
        <TotalContainer className='total'>Total ${total}</TotalContainer>
        <TextWarningContainer className='test-warning'>
            *please use the following test credit cart for payments*
            <br/>
            4242-4242-4242-4242 - Exp: 20/01 - CVV:123
        </TextWarningContainer>
        <StripeCheckoutButton price={total}/>
    </CheckOutContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckOut);