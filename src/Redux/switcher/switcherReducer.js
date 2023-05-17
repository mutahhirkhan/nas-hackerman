import { SWITCH_TO_NEW, SWITCH_TO_PAST } from "./switcherConstants";
const initialState = true;

const switchReducer = (state = initialState, actions) => {
  const { type } = actions;
  switch (type) {
    case SWITCH_TO_NEW:
      return state = true;

    case SWITCH_TO_PAST:
      return state = false;

    default:
      return state;
  }
};

export default switchReducer;