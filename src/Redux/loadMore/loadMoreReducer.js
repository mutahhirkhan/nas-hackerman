import { LOAD_MORE_ARTICLES } from './loadMoreConstants';
var initialState = [];
 
var loadMoreReducer = (state = initialState, actions) => {
    var {type, payload} = actions
    console.log(payload)
    switch (type) {
        case LOAD_MORE_ARTICLES:
            return [...state, payload.articles]
    
        default:
            return state;
    }
}

export default loadMoreReducer