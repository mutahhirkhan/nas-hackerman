import { LOAD_MORE_ARTICLES } from './loadMoreConstants';
var initialState = [];
 
var loadMoreReducer = (state = initialState, actions) => {
    var {type, payload} = actions
    // console.log(payload)
    // console.log(type, payload)
    switch (type) {
        case LOAD_MORE_ARTICLES:
            return [...state, ...payload.threads]
    
        default:
            return state;
    }
}

export default loadMoreReducer