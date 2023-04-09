import React from 'react'
import { connect } from 'react-redux'

import { clearCartItem, removeItem, addItem } from '../../redux/cart/cart.action'

import { 
    CheckOutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles'

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <CheckOutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item'/>
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='number'>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckOutItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearCartItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);