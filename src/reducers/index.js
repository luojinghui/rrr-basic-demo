
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { initData } from './init'

export default combineReducers({
  routing,
  initData
})
