import React from 'react'
import "./ThreadPanel.css"
import ArticleCard from './../ArticleCard/ArticleCard';
import { connect } from 'react-redux';

const ThreadPanel = ({newArticles,SwitchValue, pastArticles}) => {
    // console.log(newArticles,SwitchValue, pastArticles)
    var articles = []
    if(SwitchValue === true) // true for new posts 
        articles = newArticles;
    else if(SwitchValue === false) // false for past posts
        articles = pastArticles;
    // console.log(articles)
    return (
        <div className="threadPanel">
            {articles.map((comment) =>  <ArticleCard key={comment.uid} {...comment}/>)}
            {/* <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/> */}
            
        </div>
    )
}

var mapState = (state) => ({
  pastArticles: state.pastArticles,
  newArticles: state.newArticles,
  SwitchValue: state.switch
})

export default connect(mapState)(ThreadPanel)
