import { LOAD_NEW_ARTICLES } from "./loadNewConstants";
import { fetchData } from "./../../utility/utility";
import axios  from 'axios';
var initialValueForApi = 0
var newArticleIds = 0

export var loadNewArticles = () => async (dispatch) => {
    try {
      var threads = []
      //new storie's ids array
      var newIds = await (await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")).data
    //   newIds = newIds.data
    // console.log(newIds)
      var limit = newArticleIds+5
      for (let i = newArticleIds; i < limit; i++) {
        // console.log(newArticleIds)
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
      
    //   console.log(threads)
  
    } catch (error) { 
      console.log(error)
      
    }
  }