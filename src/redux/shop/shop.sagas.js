import { takeLatest, all, call, put } from 'redux-saga/effects'
import { firestore, convertCategorySnapshotToMap } from '../../firebase/firebase.utils'
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'
import ShopActionTypes from './shop.types'

export function* fetchItemCategoriesAsync() {
    try {
        const itemCategoriesReference = firestore.collection('itemCategories');
        const itemCategoriesSnapshot = yield itemCategoriesReference.get();
        const itemCategoriesMap = yield call(convertCategorySnapshotToMap, itemCategoriesSnapshot)
        yield put(fetchCollectionsSuccess(itemCategoriesMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.massage))
    }
}

export function* fetchItemCategoriesStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchItemCategoriesAsync
    );
}

export function* shopSagas() {
    yield all([call(fetchItemCategoriesStart)])
}


