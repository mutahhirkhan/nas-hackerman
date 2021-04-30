import React from "react";
import { connect } from "react-redux";
import { loadMoreArticles } from "./../../Redux/loadMore/loadMoreActions";

const LoadMoreButton = ({ loadMoreArticles, moreComments }) => {
  // console.log(moreComments)
  const [comments, setComments] = React.useState([...moreComments]);

  React.useEffect(() => {
    //CDM
    loadMoreArticles();
  }, []);
  console.log(comments, moreComments);
  return (
    <div>
      <button onClick={loadMoreArticles}>load more articles</button>
    </div>
  );
};

var actions = {
  loadMoreArticles,
};

var mapState = (state) => ({
  moreComments: state.loadMoreReducer,
});

export default connect(mapState, actions)(LoadMoreButton);
