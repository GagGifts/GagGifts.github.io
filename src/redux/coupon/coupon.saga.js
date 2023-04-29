import {takeLatest, all, call, put} from 'redux-saga/effects';
import {firestore, getCoupons } from '../../firebase/firebase.utils';
import {fetchCouponsSuccess, fetchCouponsFailure} from './coupon.actions';
import CouponActionTypes from './coupon.types';

export function * fetchCouponsAsync() {
	try {
		const couponsReference = firestore.collection('coupons');
		const couponsSnapshot = yield couponsReference.get();
		const couponMaps = yield call(getCoupons, couponsSnapshot);
		yield put(fetchCouponsSuccess(couponMaps));
	} catch (error) {
		yield put(fetchCouponsFailure(error.massage));
	}
}

export function * fetchCouponStart() {
	yield takeLatest(
		CouponActionTypes.FETCH_COUPON_START,
		fetchCouponsAsync
	);
}

export function * couponSagas() {
	yield all([call(fetchCouponStart)]);
}
