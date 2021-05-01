import React from 'react'
import "./ThreadPanel.css"
import ArticleCard from './../ArticleCard/ArticleCard';
import { connect } from 'react-redux';

const ThreadPanel = ({moreComments}) => {
    // console.log(moreComments)
    return (
        <div className="threadPanel">

            {moreComments.map((comment) =>  <ArticleCard key={comment.id} {...comment}/>)}
            {/* <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/> */}
            
        </div>
    )
}

var mapState = (state) => ({
  moreComments: state.comments
})

export default connect(mapState)(ThreadPanel)
