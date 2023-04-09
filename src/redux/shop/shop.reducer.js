import ShopActionTypes from './shop.types'

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMassage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTION_FAIL:
            return {
                ...state,
                isFetching: false,
                errorMassage: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;