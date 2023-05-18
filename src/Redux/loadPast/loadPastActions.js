import { LOAD_PAST_ARTICLES, LOAD_PAST_ARTICLES_SUCCESS } from "./loadPastConstants";
import { fetchData, POST_FETCH_LIMIT } from "../../utility/utility";

export const loadPastArticles = () => async (dispatch, getState) => {
	try {
		const PreviousCount = getState().pastArticles.counter;
		console.log("🤑 ~ file: loadPastActions.js:7 ~ loadPastArticles ~ counter:", PreviousCount);
		dispatch({
			type: LOAD_PAST_ARTICLES_SUCCESS,
			payload: {
				loading: true,
			},
		});

		//utility function to load data
		const articleResponse = [];
		for (let i = 0; i < POST_FETCH_LIMIT; i++) {
			articleResponse.push(fetchData(`https://hacker-news.firebaseio.com/v0/item/${PreviousCount + i}.json?print=pretty`));
		}

		const rawThreads = await Promise.all(articleResponse);
		const threads = [] 
		rawThreads.forEach(thread => threads.push(thread.data))
		// console.log("old threads", threads);

		dispatch({
			type: LOAD_PAST_ARTICLES,
			payload: {
				threads,
				counter: PreviousCount + POST_FETCH_LIMIT,
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
