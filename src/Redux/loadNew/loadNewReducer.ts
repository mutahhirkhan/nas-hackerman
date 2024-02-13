import { NewArticlesActions, NewArticlesReducer } from '../types'
import { LOAD_NEW_ARTICLES, LOAD_NEW_ARTICLES_SUCCESS } from './loadNewConstants'

const initialState: NewArticlesReducer = {
  articles: [],
  loading: false,
  counter: 0, // starting from 0 because, accessing fetched Ids index, not fetching articles directly
}

const loadNewReducer = (state = initialState, actions: NewArticlesActions) => {
  const { type, payload } = actions
  switch (type) {
    case LOAD_NEW_ARTICLES:
      return {
        ...state,
        articles: [...state.articles!, ...payload.articles!],
        counter: payload.counter,
      }
    case LOAD_NEW_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: payload.loading,
      }

    default:
      return state
  }
}

export default loadNewReducer
