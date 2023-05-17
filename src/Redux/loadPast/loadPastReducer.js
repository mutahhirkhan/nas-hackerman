import { LOAD_PAST_ARTICLES } from './loadPastConstants';
var initialState = [];
 
var loadMoreReducer = (state = initialState, actions) => {
    var {type, payload} = actions
    switch (type) {
        case LOAD_PAST_ARTICLES:
            return [...state, ...payload.threads]

    
        default:
            return state;
    }
}

export default loadMoreReducer