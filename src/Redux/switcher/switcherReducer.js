import { ADD_SEARCH_QUERY, SWITCH_TO_NEW, SWITCH_TO_PAST, CLEAR_SEARCH_QUERY } from './switcherConstants'
const initialState = {
  switchValue: true,
  searchQuery: '',
}

const switchReducer = (state = initialState, actions) => {
  const { type } = actions
  switch (type) {
    case SWITCH_TO_NEW:
      return {
        ...state,
        switchValue: true,
      }

    case SWITCH_TO_PAST:
      return {
        ...state,
        switchValue: false,
      }

    case ADD_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: actions.payload,
      }
    case CLEAR_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: '',
      }

    default:
      return state
  }
}

export default switchReducer
