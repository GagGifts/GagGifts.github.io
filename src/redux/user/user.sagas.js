import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
    auth,
    googleProvider,
    getUserProfileDocument,
    getCurrentUser
} from "../../firebase/firebase.utils";

import {
    signInFailure,
    signInSuccess,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure
} from "./user.actions";

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(
            getUserProfileDocument,
            userAuth,
            additionalData
        );
        const userSnapShot = yield userRef.get();
        yield put(
            signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
        );
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user, user.displayName);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromUserAuth(user);
    } catch (error) {
        alert("<ERROR>: Incorrect email or password. Please try again.");
        yield put(signInFailure(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth);
    } catch (error) {
        console.log(error);
        yield put(signInFailure(error));
    }
}

export function* signOut() {
    try {
        auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );
        yield put(signUpSuccess({ user, additionalData: { displayName } }));
    } catch (error) {
        alert("<ERROR>: A user with this email already exists. Please try again.\n");
        yield put(signUpFailure(error));
    }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    try {
        yield getSnapShotFromUserAuth(user, additionalData);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}
