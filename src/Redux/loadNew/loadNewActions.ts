import { LOAD_NEW_ARTICLES, LOAD_NEW_ARTICLES_SUCCESS } from './loadNewConstants'
import { fetchData, POST_FETCH_LIMIT } from '../../utils'
import axios from 'axios'
import { AppDispatch, RootStateCallable } from '../store'
import { Item } from '@src/utils/interfaces'
/**
  * 
  const pLimit = require('p-limit');
  //not needed when already calling concurrently using a loop.
  // example fetchDataLimit(() => fetchData(....))
  const fetchDataLimit = pLimit(50); // Limit to 50 concurrent requests
  */

export const loadNewArticles = () => async (dispatch: AppDispatch, getState: RootStateCallable) => {
  try {
    // @ts-expect-error counter possibly undefined but atually it's not
    const PreviousCount: number = getState().newArticles?.counter
    console.log('load new articles api', PreviousCount)
    dispatch({
      type: LOAD_NEW_ARTICLES_SUCCESS,
      payload: {
        loading: true,
      },
    })

    const newArticle = []

    // new storie's ids array
    const { data: newIds } = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')

    for (let i = 0; i < POST_FETCH_LIMIT && PreviousCount <= newIds.length; i++) {
      if (newIds[PreviousCount + i]) {
        newArticle.push(fetchData(`https://hacker-news.firebaseio.com/v0/item/${newIds[PreviousCount + i]}.json?print=pretty`))
      }
    }
    const rawThreads = await Promise.all(newArticle)
    const threads: Partial<Item>[] = []
    rawThreads.forEach(thread => threads.push(thread.data))
    // console.log("new threads", threads);

    dispatch({
      type: LOAD_NEW_ARTICLES,
      payload: {
        articles: threads,
        // stop the counter from going beyond the length of the newIds array
        counter: PreviousCount === newIds.length ? PreviousCount : PreviousCount + POST_FETCH_LIMIT,
      },
    })
    dispatch({
      type: LOAD_NEW_ARTICLES_SUCCESS,
      payload: {
        loading: false,
      },
    })

    //   console.log(threads)
  } catch (error) {
    console.log(error)
    dispatch({
      type: LOAD_NEW_ARTICLES_SUCCESS,
      payload: {
        loading: false,
      },
    })
  }
}
