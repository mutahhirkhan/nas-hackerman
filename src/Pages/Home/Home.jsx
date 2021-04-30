import React from 'react'
import { connect } from 'react-redux'
import { loadMoreArticles } from './../../Redux/loadMore/loadMoreActions';

const Home = ({loadMoreArticles}) => {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={loadMoreArticles}>load more articles</button>
        </div>
    )
}

var actions = {
    loadMoreArticles
}

export default connect(null, actions)(Home)
