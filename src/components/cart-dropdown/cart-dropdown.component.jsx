import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.action'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { 
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMassageContainer,
} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => ( 
    <CartDropdownContainer>
        <CartItemsContainer >
            {
                cartItems.length ?
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem}/>)
                : <EmptyMassageContainer>Your cart is empty</EmptyMassageContainer> 
            }
        </CartItemsContainer>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}
        >
            GOTO CHECK OUT            
        </CustomButton>       
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))