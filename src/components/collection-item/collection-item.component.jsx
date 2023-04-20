import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/cart/cart.action';

import {  
    CollectionItemContainer,
    CollectionFooterContainer,
    ImageContainer,
    NameContainer,
    PriceContainer,
    AddButton
} from './collection-item.styles'

const CollectionItem = ({item}) => {
    const { imageUrl, name, price } = item;
	const dispatch = useDispatch();
    return (
    <CollectionItemContainer>
        <ImageContainer className='image' imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton inverted onClick={() => dispatch(addItem(item))}> Add to cart </AddButton>
    </CollectionItemContainer>
)}


export default CollectionItem;
