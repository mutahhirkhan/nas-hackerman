import { PastArticlesActions, PastArticlesReducer } from '../types'
import { LOAD_PAST_ARTICLES, LOAD_PAST_ARTICLES_SUCCESS } from './loadPastConstants'

const initialState: PastArticlesReducer = {
  articles: [],
  loading: false,
  counter: 1, // counter is initially 1 beacuase we know that very first element in DB is the oldest one and it's id will be 1
}

const loadMoreReducer = (state = initialState, actions: PastArticlesActions) => {
  const { type, payload } = actions
  switch (type) {
    case LOAD_PAST_ARTICLES:
      return {
        ...state,
        articles: [...state.articles!, ...payload.articles!],
        counter: payload.counter,
      }
    case LOAD_PAST_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: payload.loading,
      }

    default:
      return state
  }
}

export default loadMoreReducer
