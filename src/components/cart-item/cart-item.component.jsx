import React from 'react'
import {
    CartItemContainer,
    ItemDetailsContainer,
    NameContainer
} from './cart-item.styles'

const CartItem = ({ item : {imageUrl, name, price, quantity} }) => (
    <CartItemContainer>
        <img alt='item' src={imageUrl}/>
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <NameContainer>{quantity} x ${price}</NameContainer>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;