import React from 'react'
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import Header from './../Header/Header';
import "./HackerPanel.css"

const HackerPanel = () => {
    return (
        <div className="center hackerPanel">
        <Header changeColor={true} />
        <LoadMoreButton/>
      </div>
    )
}

export default HackerPanel
