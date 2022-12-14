import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App.jsx';
import store from './redux/core/store'
import { Provider } from 'react-redux'
//https://www.youtube.com/watch?v=5NFIRaXwrOQ
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
