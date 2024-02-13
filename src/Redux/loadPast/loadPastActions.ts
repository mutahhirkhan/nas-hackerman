import { LOAD_PAST_ARTICLES, LOAD_PAST_ARTICLES_SUCCESS } from './loadPastConstants'
import { fetchData, POST_FETCH_LIMIT } from '../../utils'
import { AppDispatch, RootStateCallable } from '../store'
import { Item } from '@src/utils/interfaces'

export const loadPastArticles = () => async (dispatch: AppDispatch, getState: RootStateCallable) => {
  try {
    // @ts-expect-error counter possibly undefined but atually it's not
    const PreviousCount: number = getState().pastArticles?.counter
    console.log('load past articles api', PreviousCount)
    dispatch({
      type: LOAD_PAST_ARTICLES_SUCCESS,
      payload: {
        loading: true,
      },
    })

    // utility function to load data
    const articleResponse = []
    for (let i = 0; i < POST_FETCH_LIMIT; i++) {
      articleResponse.push(fetchData(`https://hacker-news.firebaseio.com/v0/item/${PreviousCount + i}.json?print=pretty`))
    }

    const rawThreads = await Promise.all(articleResponse)
    const threads: Partial<Item>[] = []
    rawThreads.forEach(thread => threads.push(thread.data))
    // console.log("old threads", threads);

    dispatch({
      type: LOAD_PAST_ARTICLES,
      payload: {
        articles: threads,
        counter: PreviousCount + POST_FETCH_LIMIT,
      },
    })

    dispatch({
      type: LOAD_PAST_ARTICLES_SUCCESS,
      payload: {
        loading: false,
      },
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: LOAD_PAST_ARTICLES_SUCCESS,
      payload: {
        loading: false,
      },
    })
  }
}
