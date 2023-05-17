import { LOAD_PAST_ARTICLES, LOAD_PAST_ARTICLES_SUCCESS } from "./loadPastConstants";
import { fetchData, POST_FETCH_LIMIT } from "../../utility/utility";
var initialValueForApi = 0;

export const loadPastArticles = () => async (dispatch) => {
	try {
		dispatch({
			type: LOAD_PAST_ARTICLES_SUCCESS,
			payload: {
				loading: true,
			},
		});
		//utility function to load data
		const articleResponse = [];
		for (let i = 0; i < POST_FETCH_LIMIT; i++) {
			articleResponse.push(fetchData(`https://hacker-news.firebaseio.com/v0/item/${(initialValueForApi += 1)}.json?print=pretty`));
		}

		const threads = await Promise.all(articleResponse);
		// console.log("old threads", threads);

		dispatch({
			type: LOAD_PAST_ARTICLES,
			payload: {
				threads,
			},
		});

		dispatch({
			type: LOAD_PAST_ARTICLES_SUCCESS,
			payload: {
				loading: false,
			},
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: LOAD_PAST_ARTICLES_SUCCESS,
			payload: {
				loading: false,
			},
		});
	}
};
