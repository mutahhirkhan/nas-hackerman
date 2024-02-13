import { FC, useCallback, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { loadPastArticles } from '@src/Redux/loadPast/loadPastActions'
import { loadNewArticles } from '@src/Redux/loadNew/loadNewActions'
import Heading from '@components/Heading/Heading'
import './LoadMoreButton.css'
import Loader from '@components/Loader/Loader'
import { RootState } from '@src/Redux/store'

interface ILoadMoreButton {
  loadPastArticles: () => void
  loadNewArticles: () => void
}

const LoadMoreButton: FC<ILoadMoreButton> = ({ loadPastArticles, loadNewArticles }) => {
  const { newArticlesLoading, pastArticlesLoading, searchQuery, switchValue } = useSelector((state: RootState) => ({
    switchValue: state.switch.switchValue,
    searchQuery: state.switch.searchQuery,
    newArticlesLoading: state.newArticles.loading,
    pastArticlesLoading: state.pastArticles.loading,
  }))

  // console.log(newArticlesLoading, pastArticlesLoading)

  const loadArticles = useCallback(() => {
    // do not load if already loading
    if (newArticlesLoading || pastArticlesLoading) return
    if (switchValue) {
      // true for new posts
      loadNewArticles()
    } else if (!switchValue) {
      // false for past posts
      loadPastArticles()
    }
  }, [loadPastArticles, loadNewArticles, switchValue, newArticlesLoading, pastArticlesLoading])
  // console.log(moreComments)
  // const [comments, setComments] = useState([...moreComments]);

  useEffect(() => {
    // CDM
    loadPastArticles()
    loadNewArticles()
  }, [loadPastArticles, loadNewArticles])

  return searchQuery ? (
    <></>
  ) : (
    <div className="loadMoreBtn center" onClick={loadArticles}>
      <button className="loadMoreContent">
        {newArticlesLoading || pastArticlesLoading ? (
          <Loader></Loader>
        ) : (
          <Heading fontWeight="bold" fontSize={10}>
            Load More
          </Heading>
        )}
      </button>
    </div>
  )
}

const actions = {
  loadPastArticles,
  loadNewArticles,
}

export default connect(null, actions)(LoadMoreButton)
