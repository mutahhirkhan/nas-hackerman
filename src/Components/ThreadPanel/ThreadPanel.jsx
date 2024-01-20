import React, { useEffect, useState, useRef, useCallback } from 'react'
import './ThreadPanel.css'
import ArticleCard from './../ArticleCard/ArticleCard'
import { loadPastArticles } from '../../Redux/loadPast/loadPastActions'
import { loadNewArticles } from './../../Redux/loadNew/loadNewActions'
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid'
import ArticleSkeleton from '../ArticleSkeleton/ArticleSkeleton'

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
}) => {
  const [intitalLoading, setIntitalLoading] = useState(true)
  // console.log('new', newArticlesLoading, '- past', pastArticlesLoading)
  const observer = useRef()

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
      if (newArticlesLoading || pastArticlesLoading) return
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
    [newArticlesLoading, pastArticlesLoading, switchValue, loadNewArticles, loadPastArticles],
  )

  return (
    <div className="threadPanel">
      {intitalLoading
        ? Array.from({ length: 10 }).map((_, index) => <ArticleSkeleton key={index + 1} />)
        : switchValue
          ? newArticles.map((comment, index) => {
              if (newArticles.length === index + 1) return <ArticleCard innerRef={lastArticleRef} key={uuid()} {...comment} />
              return <ArticleCard key={uuid()} {...comment} />
            })
          : pastArticles.map((comment, index) => {
              if (pastArticles.length === index + 1) return <ArticleCard innerRef={lastArticleRef} key={uuid()} {...comment} />
              return <ArticleCard key={uuid()} {...comment} />
            })}

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
  switchValue: state.switch,
})

export default connect(mapState, actions)(ThreadPanel)
