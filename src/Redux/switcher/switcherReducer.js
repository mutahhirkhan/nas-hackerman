import { SWITCH_TO_NEW, SWITCH_TO_PAST } from "./switcherConstants";
var initialState = true;

var switchReducer = (state = initialState, actions) => {
  var { type } = actions;
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