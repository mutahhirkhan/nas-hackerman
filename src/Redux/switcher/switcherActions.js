import { ADD_SEARCH_QUERY, CLEAR_SEARCH_QUERY, SWITCH_TO_NEW, SWITCH_TO_PAST } from './switcherConstants'

export const switchToNew = () => dispatch => {
  try {
    // console.log("new")
    dispatch({
      type: SWITCH_TO_NEW,
    })
  } catch (error) {
    console.log(error)
  }
}

export const switchToPast = () => dispatch => {
  try {
    // console.log("past")
    dispatch({
      type: SWITCH_TO_PAST,
    })
  } catch (error) {
    console.log(error)
  }
}

export const addSearchQuery = query => dispatch => {
  try {
    console.log('query', query);
    dispatch({
      type: ADD_SEARCH_QUERY,
      payload: query,
    })
  } catch (error) {
    console.log(error)
  }
}

export const clearSearchQuery = () => dispatch => {
  try {
    dispatch({
      type: CLEAR_SEARCH_QUERY,
    })
  } catch (error) {
    console.log(error)
  }
}