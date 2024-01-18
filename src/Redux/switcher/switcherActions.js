import { SWITCH_TO_NEW, SWITCH_TO_PAST } from './switcherConstants'

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
