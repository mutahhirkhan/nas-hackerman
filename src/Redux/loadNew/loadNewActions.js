import { LOAD_NEW_ARTICLES, LOAD_NEW_ARTICLES_SUCCESS } from "./loadNewConstants";
import { fetchData, POST_FETCH_LIMIT } from "./../../utility/utility";
import axios from "axios";

export const loadNewArticles = () => async (dispatch) => {
	try {
		dispatch({
			type: LOAD_NEW_ARTICLES_SUCCESS,
			payload: {
				loading: true,
			},
		});

		// var threads = []
		const newArticle = [];

		//new storie's ids array
		const { data: newIds } = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty");


		for (let i = 0; i < POST_FETCH_LIMIT && i < newIds.length; i++) {
			if (newIds[i]) {
				newArticle.push(fetchData(`https://hacker-news.firebaseio.com/v0/item/${newIds[i]}.json?print=pretty`));
			}
		}
		const threads = await Promise.all(newArticle);
		// console.log("new threads", threads);

		dispatch({
			type: LOAD_NEW_ARTICLES,
			payload: {
				threads,
			},
		});
		dispatch({
			type: LOAD_NEW_ARTICLES_SUCCESS,
			payload: {
				loading: false,
			},
		});

		//   console.log(threads)
	} catch (error) {
		console.log(error);
		dispatch({
			type: LOAD_NEW_ARTICLES_SUCCESS,
			payload: {
				loading: false,
			},
		});
	}
};
