import { LOAD_MORE_ARTICLES } from './loadMoreConstants';


export var loadMoreArticles = () => async (dispatch) => {
    try {
        console.log("fetching...")
        dispatch({
            type: LOAD_MORE_ARTICLES
        })
    } catch (error) {
        console.log(error)
        
    }
}