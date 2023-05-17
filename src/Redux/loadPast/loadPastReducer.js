import { LOAD_PAST_ARTICLES, LOAD_PAST_ARTICLES_SUCCESS } from './loadPastConstants';
const initialState = {
    articles: [],
    loading: false,
};
 
const loadMoreReducer = (state = initialState, actions) => {
    const {type, payload} = actions
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