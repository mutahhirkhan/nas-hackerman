import { combineReducers } from 'redux'
import loadPastReducer from './loadPast/loadPastReducer'
import switchReducer from './switcher/switcherReducer'
import loadNewReducer from './loadNew/loadNewReducer'

const rootReducer = combineReducers({
  pastArticles: loadPastReducer,
  switch: switchReducer,
  newArticles: loadNewReducer,
})

export default rootReducer
