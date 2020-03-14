import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';

import { Provider } from "mobx-react";
import store from './Store/Store';
import anotherStore from "./Store/AnotherSrore";

const root = (
    <Provider
        store={store}
        anotherStore={anotherStore}
    >
        <App/>
    </Provider>
)

ReactDOM.render( root, document.getElementById('root'));


