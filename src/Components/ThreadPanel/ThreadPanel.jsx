import React, { useEffect, useState, useRef, useCallback } from 'react'
import './ThreadPanel.css'
import ArticleCard from './../ArticleCard/ArticleCard'
import { loadPastArticles } from './../../Redux/loadPast/loadPastActions'
import { loadNewArticles } from '././../../Redux/loadNew/loadNewActions'
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid'
import ArticleSkeleton from './../ArticleSkeleton/ArticleSkeleton'
import { POST_FETCH_LIMIT } from './../../utils/index.js'

/**
 * newArticles = {
 *  articles = Array,
 *  loading: boolean
 * }
 *
 * pastArticles = {
 *  articles = Array,
 *  loading: boolean
 * }
 */

const ThreadPanel = ({
  newArticles: { articles: newArticles, loading: newArticlesLoading },
  switchValue,
  pastArticles: { articles: pastArticles, loading: pastArticlesLoading },
  loadPastArticles,
  loadNewArticles,
  searchQuery,
}) => {
  // const [searchQuery, setSearchQuery] = useState("You Don't Need to Document Everything")
  const [intitalLoading, setIntitalLoading] = useState(true)
  // console.log('new', newArticlesLoading, '- past', pastArticlesLoading)
  const observer = useRef()

  const filteredItems = (switchValue ? newArticles : pastArticles).filter(item => {
    const lowerCaseQuery = searchQuery.toLowerCase()
    const lowerCaseTitle = String(item.title?.toLowerCase())
    const lowerCaseDescription = String(item.text?.toLowerCase())

    // Check for substring match in title or description
    if (lowerCaseTitle.includes(lowerCaseQuery) || lowerCaseDescription.includes(lowerCaseQuery)) {
      return true
    }

    return false
  })
  console.log(filteredItems)

  useEffect(() => {
    //artifically showing skeleton because of rapid fetching of data
    if (newArticlesLoading === false && pastArticlesLoading === false) {
      setTimeout(() => {
        setIntitalLoading(prev => (prev = false))
      }, 2500)
    }
  }, [newArticlesLoading, pastArticlesLoading, switchValue])

  const lastArticleRef = useCallback(
    node => {
      /**
       * don't want to load if already loading or if search field has some values,
       * if search query has some values, then possibly that results are not
       * enough to scroll then infinite scroll will keep triggering and would
       * enough to scroll then infinite scroll will keep triggering and would
       * cause an infinite loop and unwanted external calls.
       */
      if (newArticlesLoading || pastArticlesLoading || searchQuery) return
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver(entries => {
        console.log(entries[0])
        if (entries[0].isIntersecting) {
          if (switchValue) loadNewArticles()
          else loadPastArticles()
        }
      })

      if (node) observer.current.observe(node)
    },
    [newArticlesLoading, pastArticlesLoading, switchValue, loadNewArticles, loadPastArticles, searchQuery],
  )

  return (
    <div className="threadPanel">
      {intitalLoading
        ? Array.from({ length: POST_FETCH_LIMIT }).map((_, index) => <ArticleSkeleton key={index + 1} />)
        : switchValue
          ? filteredItems.map((comment, index) => {
              if (filteredItems.length === index + 1) return <ArticleCard innerRef={lastArticleRef} key={uuid()} {...comment} />
              return <ArticleCard key={uuid()} {...comment} />
            })
          : filteredItems.map((comment, index) => {
              if (filteredItems.length === index + 1) return <ArticleCard innerRef={lastArticleRef} key={uuid()} {...comment} />
              return <ArticleCard key={uuid()} {...comment} />
            })}
      {filteredItems.length === 0 && <h1 className="no-results">Clear search and load more articles to have desired results</h1>}
      {/* <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/> */}
    </div>
  )
}

var actions = {
  loadPastArticles,
  loadNewArticles,
}

var mapState = state => ({
  pastArticles: state.pastArticles,
  newArticles: state.newArticles,
  ...state.switch,
})

export default connect(mapState, actions)(ThreadPanel)
