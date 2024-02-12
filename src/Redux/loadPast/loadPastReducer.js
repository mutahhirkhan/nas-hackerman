import { LOAD_PAST_ARTICLES, LOAD_PAST_ARTICLES_SUCCESS } from './loadPastConstants'
const initialState = {
  articles: [],
  loading: false,
  counter: 1, //counter is initially 1 beacuase we know that very first element in DB is the oldest one and it's id will be 1
}

const loadMoreReducer = (state = initialState, actions) => {
  const { type, payload } = actions
  switch (type) {
    case LOAD_PAST_ARTICLES:
      return {
        ...state,
        articles: [...state.articles, ...payload.threads],
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
