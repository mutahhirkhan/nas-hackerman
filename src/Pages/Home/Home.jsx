import React from 'react'
import { connect } from 'react-redux'
import { loadMoreArticles } from './../../Redux/loadMore/loadMoreActions';
import Header from './../../Components/Header/Header';

const Home = ({loadMoreArticles}) => {
    return (
        <div>
            <Header/>
            <button onClick={loadMoreArticles}>load more articles</button>
        </div>
    )
}

var actions = {
    loadMoreArticles
}

export default connect(null, actions)(Home)
