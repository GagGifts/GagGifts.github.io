import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
import navigationButtonReducer from './navigation-button/navigation-button.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers ({
    user: userReducer,
    directory: directoryReducer,
    shop: shopReducer,
	navigation: navigationButtonReducer
})

export default persistReducer(persistConfig, rootReducer)
