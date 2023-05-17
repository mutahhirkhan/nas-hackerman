import React from "react";
import "./ThreadPanel.css";
import ArticleCard from "./../ArticleCard/ArticleCard";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";

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

const ThreadPanel = ({ newArticles: { articles: newArticles }, SwitchValue, pastArticles: { articles: pastArticles } }) => {
	return (
		<div className="threadPanel">
			{SwitchValue
				? newArticles.map((comment) => <ArticleCard key={uuid()} {...comment} />)
				: pastArticles.map((comment) => <ArticleCard key={uuid()} {...comment} />)}

			{/* <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/> */}
		</div>
	);
};

var mapState = (state) => ({
	pastArticles: state.pastArticles,
	newArticles: state.newArticles,
	SwitchValue: state.switch,
});

export default connect(mapState)(ThreadPanel);
