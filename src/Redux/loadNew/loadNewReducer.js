import { LOAD_NEW_ARTICLES, LOAD_NEW_ARTICLES_SUCCESS } from "./loadNewConstants";
var initialState = {
	articles: [],
	loading: false,
};

var loadNewReducer = (state = initialState, actions) => {
	var { type, payload } = actions;
	switch (type) {
		case LOAD_NEW_ARTICLES:
			return {
				...state,
				articles: [...state.articles, ...payload.threads],
			};
		case LOAD_NEW_ARTICLES_SUCCESS:
			return {
				...state,
				loading: payload.loading,
			};

		default:
			return state;
	}
};

export default loadNewReducer;
