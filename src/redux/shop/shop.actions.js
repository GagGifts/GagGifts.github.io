import ShopActionTypes from './shop.types'


export const updateCollections = collectionsMap => ({
    type: ShopActionTypes.UPDATE_COLLECTION,
    payload: collectionsMap
})

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionsSuccess = collectionMaps => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMaps
})

export const fetchCollectionsFailure = errorMassage => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAIL,
    payload: errorMassage
})


