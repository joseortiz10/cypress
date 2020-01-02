import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

/** Components import section */
import App from './App';
import CallbackPage from '../src/views/login/CallbackPage';

/** Redux import */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './store/RootReducer';

/** OIDC import */
import {OidcProvider, loadUser} from 'redux-oidc';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';

/** Middleware import section */
import thunkMiddleware from 'redux-thunk';

import userManager from './store/helpers/userManager';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
loadUser(store, userManager);

ReactDOM.render(
    <Provider store={store}>
        <OidcProvider store={store} userManager={userManager}>
            <Router basename={`${process.env.REACT_APP_ROOT}`}>
                <Switch>
                    <Route exact path='/callback' component={CallbackPage} />
                    <Route path='/' component={App} />
                </Switch>
            </Router>
        </OidcProvider>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
