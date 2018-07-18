import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store/index.js';
import 'antd-mobile/dist/antd-mobile.css';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter as  Router} from "react-router-dom"
ReactDOM.render(<Provider store={store}>
       <Router><App></App></Router>
    </Provider>, document.getElementById('root'));
if(process.env.NODE_ENV==="development"){
    require('./mock/index.js')
    registerServiceWorker();
}