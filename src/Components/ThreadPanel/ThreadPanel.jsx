import React, { useEffect } from "react";
import "./ThreadPanel.css";
import ArticleCard from "./../ArticleCard/ArticleCard";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import ArticleSkeleton from "../ArticleSkeleton/ArticleSkeleton";

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
	SwitchValue,
	pastArticles: { articles: pastArticles, loading: pastArticlesLoading },
}) => {
	const [intitalLoading, setIntitalLoading] = React.useState(true);
	console.log("new", newArticlesLoading, "- past", pastArticlesLoading);

	useEffect(() => {
		if (newArticlesLoading === false && pastArticlesLoading === false) {
			setTimeout(() => {
				setIntitalLoading((prev) => (prev = false));
			}, 2500);
		}
	}, [newArticlesLoading, pastArticlesLoading]);

	useEffect(() => {
		console.log("intitalLoading", intitalLoading);
	}, [intitalLoading]);

	return (
		<div className="threadPanel">
			{intitalLoading
				? Array.from({ length: 10 }).map((_, index) => <ArticleSkeleton key={index + 1} />)
				: SwitchValue
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
