import React from 'react'
import "./ThreadPanel.css"
import ArticleCard from './../ArticleCard/ArticleCard';
import { connect } from 'react-redux';

const ThreadPanel = ({newArticles}) => {
    // console.log(moreComments)
    return (
        <div className="threadPanel">

            {newArticles.map((comment) =>  <ArticleCard key={comment.id} {...comment}/>)}
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
  SwitchValue: state.SwitchValue
})

export default connect(mapState)(ThreadPanel)
