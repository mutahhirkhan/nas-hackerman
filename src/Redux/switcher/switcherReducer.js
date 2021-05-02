import { SWITCH_TO_NEW, SWITCH_TO_PAST } from "./switcherConstants";
var initialState = {
  new: 'selected',
  past: null,
};

var switchReducer = (state = initialState, actions) => {
  var { type } = actions;
  switch (type) {
    case SWITCH_TO_NEW:
      // return state = { new: "selected", past: null,};
      return {...state, new:"selected", past:null}

    case SWITCH_TO_PAST:
      return {...state, past:"selected", new:null}

      // return state = {new: null, past: "selected",};

    default:
      return state;
  }
};

export default switchReducer;