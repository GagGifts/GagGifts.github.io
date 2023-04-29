import { all, call } from 'redux-saga/effects'

import { shopSagas } from './shop/shop.sagas'

import { userSagas } from './user/user.sagas'

import { couponSagas } from './coupon/coupon.saga'

export default function* rootSaga () {
    yield all([call(couponSagas), call(userSagas), call(shopSagas)])
}
