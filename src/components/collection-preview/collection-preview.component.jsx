import React from 'react'
import { withRouter } from 'react-router-dom'

import CollectionItem from'../collection-item/collection-item.component'

import {  
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './collection-preview.styles'

const CollectionPreview = ({categoryName, items, history, match, routeName}) => (
    <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{categoryName.toUpperCase()}</TitleContainer>
        <PreviewContainer>
        {
            items.filter((item, idx) => idx < 4).map(item => (
                <CollectionItem key={item.id} item={item} />
            ))
        }
        </PreviewContainer>
    </CollectionPreviewContainer>
)
// const CollectionPreview = (state) => {
// 	let keys = Object.keys(state)
// 	console.log("checking state" + state.categoryName);
// 	console.log("checking key: " + keys);
// 	return (
// 		<div></div>
// 	)
// }


export default withRouter(CollectionPreview);
