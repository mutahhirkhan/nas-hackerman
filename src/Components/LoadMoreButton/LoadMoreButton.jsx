import React from "react";
import { connect } from "react-redux";
import { loadMoreArticles, loadNewArticles } from "./../../Redux/loadMore/loadMoreActions";
import Heading from "src/Components/Heading/Heading";
import "./LoadMoreButton.css";

const LoadMoreButton = ({ loadMoreArticles, loadNewArticles }) => {
  // console.log(moreComments)
  // const [comments, setComments] = React.useState([...moreComments]);

  React.useEffect(() => {
    //CDM
    loadMoreArticles();
    loadNewArticles()
  }, []);
  console.log();
  return (
    <div className="loadMoreBtn center" onClick={loadMoreArticles}>
      <button className="loadMoreContent">
        <Heading fontWeight="bold" fontSize={10}>
          Load More
        </Heading>
      </button>
    </div>
  );
};

var actions = {
  loadMoreArticles,
  loadNewArticles,
};

// var mapState = (state) => ({
//   moreComments: state.comments
// })

export default connect(null, actions)(LoadMoreButton);
