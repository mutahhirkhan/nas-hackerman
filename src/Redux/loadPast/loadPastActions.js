import { LOAD_PAST_ARTICLES } from "./loadPastConstants";
import { fetchData } from "../../utility/utility";
var initialValueForApi = 0
export var loadPastArticles = () => async (dispatch) => {
  try {
    //utility function to load data
    var threads = [];
    
    for (let i = 0; i < 5; i++) {
      var article = await fetchData(`https://hacker-news.firebaseio.com/v0/item/${initialValueForApi+=1}.json?print=pretty`);
      threads.push(article)
    }
    // console.log(threads);
      dispatch({
        type: LOAD_PAST_ARTICLES,
        payload: {
          threads,
        }
      });
  } catch (error) {
    console.log(error);
  }
};

