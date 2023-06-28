// index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './app/store'; // Assuming you have a store.ts file in a app folder
import App from './App'; // Assuming you have an App.tsx file
import './index.css'; // Assuming you have some global styles

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
