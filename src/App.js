import React from 'react';

import AppRouter from './routers/AppRouter';

import { Provider } from 'react-redux';
import store from './redux/store/configureStore';

import './styles/styles.scss';

const app = (
    <div>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
);

export default app;


