import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadPastArticles } from "../../Redux/loadPast/loadPastActions";
import { loadNewArticles } from "./../../Redux/loadNew/loadNewActions";
import Heading from "src/Components/Heading/Heading";
import "./LoadMoreButton.css";
import Loader from "../Loader/Loader";

const LoadMoreButton = ({ loadPastArticles, loadNewArticles, switchValue, newArticlesLoading, pastArticlesLoading }) => {

  // console.log(newArticlesLoading, pastArticlesLoading)
  
	const loadArticles = () => {
		if (switchValue === true) {
			//true for new posts
			loadNewArticles();
		} else if (switchValue === false) {
			//false for past posts
			loadPastArticles();
		}
	};
	// console.log(moreComments)
	// const [comments, setComments] = useState([...moreComments]);

	useEffect(() => {
		//CDM
		loadPastArticles();
		loadNewArticles();
	}, []);

	return (
		<div className="loadMoreBtn center" onClick={loadArticles}>
			<button className="loadMoreContent">
				{(newArticlesLoading || pastArticlesLoading) ? (
					<Loader></Loader>
				) : (
					<Heading fontWeight="bold" fontSize={10}>
						Load More
					</Heading>
				)}
			</button>
		</div>
	);
};

var actions = {
	loadPastArticles,
	loadNewArticles,
};

var mapState = (state) => ({
	newArticlesLoading: state.newArticles.loading,
	pastArticlesLoading: state.pastArticles.loading,
	switchValue: state.switch,
});

export default connect(mapState, actions)(LoadMoreButton);
