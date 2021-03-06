/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/11/1
 * Time: 上午11:25
 */
import 'normalize.css/normalize.css'

import './base.less'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import createStore from './store'
// 按需增删改 start
import RouteTest from './components/RouteTest'
import FormTest from './components/FormTest'
import App from './containers/App'
// 按需增删改 end

const store = createStore()
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
            <Route path="/routetest" component={RouteTest} />
            <Route path="/formtest" component={FormTest} />
        </Router>
    </Provider>,
    document.getElementById('root')
)
