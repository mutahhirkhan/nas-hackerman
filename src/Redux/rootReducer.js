import { combineReducers } from "redux";
import loadMoreReducer from './loadMore/loadMoreReducer';
import switchReducer from './switcher/switcherReducer';

var rootReducer = combineReducers({
    comments: loadMoreReducer,
    switch: switchReducer,
})

export default rootReducer