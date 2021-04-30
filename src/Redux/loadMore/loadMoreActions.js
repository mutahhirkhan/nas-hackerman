import { LOAD_MORE_ARTICLES } from "./loadMoreConstants";
import { fetchData } from "./../../utility/utility";

export var loadMoreArticles = () => async (dispatch) => {
  try {
    //utility function to load data
    var articles = await fetchData("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty");
    // console.log(articles);

    dispatch({
      type: LOAD_MORE_ARTICLES,
      payload: {
        articles,
      }
    });
  } catch (error) {
    console.log(error);
  }
};
