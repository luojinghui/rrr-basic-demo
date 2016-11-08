/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/11/7
 * Time: 下午6:57
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducers from './reducers'
import { initNavData, initData } from './actions'

import Index from './components/Test/Index'
import App from './components/Test/App'
import NavOne from './components/Test/NavOne'
import NavTwo from './components/Test/NavTwo'

require('./base.css')

const store = createStore(
    reducers,
    // applyMiddleware(thunk)
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
const history = syncHistoryWithStore(hashHistory, store)

store.dispatch(initNavData);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} >
                <IndexRoute component={Index}/>
                <Route path="nav1" component={NavOne}/>
                <Route path="nav2" component={NavTwo}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)