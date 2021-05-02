import { LOAD_MORE_ARTICLES, LOAD_NEW_ARTICLES } from "./loadMoreConstants";
import { fetchData } from "./../../utility/utility";
import axios  from 'axios';
var initialValueForApi = 0
var newArticleIds = 0
export var loadMoreArticles = () => async (dispatch) => {
  try {
    //utility function to load data
    var threads = [];
    
    for (let i = 0; i < 5; i++) {
      var article = await fetchData(`https://hacker-news.firebaseio.com/v0/item/${initialValueForApi+=1}.json?print=pretty`);
      threads.push(article)
    }
    // console.log(threads);
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


export var loadNewArticles = () => async (dispatch) => {
  try {
    console.log("here")
    var threads = []
    //new storie's ids array
    var newIds = await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
    console.log(newIds.data)
    newIds = newIds.data
    var limit = newArticleIds+10
    console.log(limit)
    for (let i = newArticleIds; i < limit; i++) {
      console.log(newArticleIds)
      if(newIds[i])
      {
        var article = await fetchData(`https://hacker-news.firebaseio.com/v0/item/${newIds[i]}.json?print=pretty`);
        threads.push(article)
        newArticleIds+=1
      }
    }
    // console.log(threads);
    dispatch({
      type: LOAD_NEW_ARTICLES,
      payload: {
        threads,
      }
    });
    
    console.log(threads)

  } catch (error) { 
    console.log(error)
    
  }
}