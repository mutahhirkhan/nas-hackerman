import { combineReducers } from "redux";
import loadMoreReducer from './loadMore/loadMoreReducer';

var rootReducer = combineReducers({
    loadMoreReducer,
})

export default rootReducer