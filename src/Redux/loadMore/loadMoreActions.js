import { LOAD_MORE_ARTICLES } from "./loadMoreConstants";
import { fetchData } from "./../../utility/utility";
var initialValueForApi = 0
export var loadMoreArticles = () => async (dispatch) => {
  try {
    //utility function to load data
    var threads = [];
    for (let i = 0; i < 5; i++) {
      var article = await fetchData(`https://hacker-news.firebaseio.com/v0/item/${initialValueForApi+=1}.json?print=pretty`);
      threads.push(article)
    }
    console.log(threads);
      dispatch({
        type: LOAD_MORE_ARTICLES,
        payload: {
          threads,
        }
      });
  } catch (error) {
    console.log(error);
  }
};
