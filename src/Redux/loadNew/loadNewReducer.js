import { LOAD_NEW_ARTICLES, LOAD_NEW_ARTICLES_SUCCESS } from "./loadNewConstants";
const initialState = {
	articles: [],
	loading: false,
};

const loadNewReducer = (state = initialState, actions) => {
	const { type, payload } = actions;
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
