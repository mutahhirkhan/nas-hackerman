import { LOAD_NEW_ARTICLES } from './loadNewConstants';
var initialState = [];
 
var loadNewReducer = (state = initialState, actions) => {
    var {type, payload} = actions
    switch (type) {
        case LOAD_NEW_ARTICLES:
            return [...state, ...payload.threads]
    
        default:
            return state;
    }
}

export default loadNewReducer