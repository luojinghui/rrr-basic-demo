
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { initData, initNav1, initNav } from './init'

export default combineReducers({
  routing,
  initData,
  initNav1,
  initNav
})
