import React from 'react'
import "./ThreadPanel.css"
import ArticleCard from './../ArticleCard/ArticleCard';
import { connect } from 'react-redux';

const ThreadPanel = ({newArticles,SwitchValue, pastArticles}) => {
    // console.log(newArticles,SwitchValue, pastArticles)
    var articles = []
    if(SwitchValue.new === "selected") 
        articles = newArticles;
    else if(SwitchValue.past === "selected")
        articles = pastArticles;
    // console.log(articles)
    return (
        <div className="threadPanel">
            {articles.map((comment) =>  <ArticleCard key={comment.id} {...comment}/>)}
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
