import { LOAD_MORE_ARTICLES } from './loadMoreConstants';
import { fetchData } from './../../utility/utility';


export var loadMoreArticles = () => async (dispatch) => {
    try {
        console.log("fetching...")
        //utility function to load data
        var data = await fetchData("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty")
        console.log(data)
      
        // dispatch({
        //     type: LOAD_MORE_ARTICLES
        // })
    } catch (error) {
        console.log(error)
        
    }
}