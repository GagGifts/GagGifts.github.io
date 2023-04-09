import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { 
    CartIconContainer,
    ShopIconContainer,
    ItemCountContainer
} from './cart-icon.styles'

const CardIcon = ({ toggleCartHidden, cartItems }) => (
<CartIconContainer onClick={toggleCartHidden}>
    <ShopIconContainer/>
    <ItemCountContainer>
        {cartItems}
    </ItemCountContainer>
</CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);