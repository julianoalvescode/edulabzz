import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { persistor, store } from './store/index';

import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('app')
);

reportWebVitals();
