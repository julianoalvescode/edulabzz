/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import expireIn from 'redux-persist-transform-expire-in';

import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/lib/storage/session';
import * as I from 'shared/interfaces';

import { timeSpan } from 'utils';

const expireTime = timeSpan('10m');
const expirationKey = 'expirationKeyCoffe';

import { language, user, theme } from './reducers';

const rootPersistConfig = {
    key: 'coffe-count',
    storage,
    whitelist: ['language', 'theme'],
    transforms: [expireIn(expireTime, expirationKey, [])],
};

const authPersistConfig = { key: 'user', storage: sessionStorage }; // This is to session storage

const rootReducer = combineReducers({
    user: persistReducer(authPersistConfig, user),
    language: language,
    theme: theme,
});

const initialState: I.State = {
    language: 'pt-BR',
    user: null,
    theme: 'primary',
};

export const store = createStore(
    persistReducer(rootPersistConfig, rootReducer),
    initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
