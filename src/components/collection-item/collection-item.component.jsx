import React from 'react';

import {  
    CollectionItemContainer,
    CollectionFooterContainer,
    ImageContainer,
    NameContainer,
    PriceContainer,
    AddButton
} from './collection-item.styles'

const CollectionItem = ({item}) => {
    const { imageUrl, name, price } = item
    return (
    <CollectionItemContainer>
        <ImageContainer className='image' imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton inverted > Add to cart </AddButton>
    </CollectionItemContainer>
)}


export default CollectionItem;
