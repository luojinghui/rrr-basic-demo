
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
// import createStore from './store'
import reducers from './reducers'
// 按需增删改 start
import RouteTest from './components/RouteTest'
import FormTest from './components/FormTest'
import App from './containers/App'
// 按需增删改 end

// const store = createStore()
const store = createStore(
    reducers,
    applyMiddleware(thunk)
);
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
