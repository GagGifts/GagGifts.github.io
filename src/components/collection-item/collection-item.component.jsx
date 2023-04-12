import React from 'react';
import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cart.action'

import {  
    CollectionItemContainer,
    CollectionFooterContainer,
    ImageContainer,
    NameContainer,
    PriceContainer,
    AddButton
} from './collection-item.styles'

const CollectionItem = ({item, addItem}) => {
    const { imageUrl, name, price } = item
    return (
    <CollectionItemContainer>
        <ImageContainer className='image' imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton inverted onClick={() => addItem(item)}> Add to cart </AddButton>
    </CollectionItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);