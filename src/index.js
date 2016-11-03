
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducers from './reducers'
import { initData } from './actions'
import RouteTest from './components/RouteTest'
import FormTest from './components/FormTest'
import App from './containers/App'
require('./base.css')

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);
const history = syncHistoryWithStore(hashHistory, store)

store.dispatch(initData);

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <Route path="/" component={App}/>
//       <Route path="/routetest" component={RouteTest} />
//       <Route path="/formtest" component={FormTest} />
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// )


ReactDOM.render(
    <Provider>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Index}/>
                <Route path="routetest" component={RouteTest}/>
                <Route path="formtest" component={FormTest}/>
            </Route>
        </Router>
    </Provider>
)