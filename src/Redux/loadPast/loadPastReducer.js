import { LOAD_PAST_ARTICLES, LOAD_PAST_ARTICLES_SUCCESS } from './loadPastConstants';
var initialState = {
    articles: [],
    loading: false,
};
 
var loadMoreReducer = (state = initialState, actions) => {
    var {type, payload} = actions
    switch (type) {
        case LOAD_PAST_ARTICLES:
            return {
                ...state, 
                articles: [...state.articles, ...payload.threads]
            }
        case LOAD_PAST_ARTICLES_SUCCESS:
            return {
                ...state,
                loading: payload.loading    
            }

    
        default:
            return state;
    }
}

export default loadMoreReducer