import React from 'react'
import "./ThreadPanel.css"
import ArticleCard from './../ArticleCard/ArticleCard';

const ThreadPanel = () => {
    return (
        <div className="threadPanel">
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            
        </div>
    )
}

export default ThreadPanel
