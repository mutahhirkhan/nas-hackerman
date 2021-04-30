import React from "react";
import { connect } from "react-redux";
import { loadMoreArticles } from "./../../Redux/loadMore/loadMoreActions";
import "./LoadMoreButton.css";

const LoadMoreButton = ({ loadMoreArticles}) => {
  // console.log(moreComments)
  // const [comments, setComments] = React.useState([...moreComments]);

  // React.useEffect(() => {
  //   //CDM
  //   loadMoreArticles();
  // }, []);
  return (
    <div className="loadMoreBtn center">
      <button onClick={loadMoreArticles}>load more articles</button>
    </div>
  );
};

var actions = {
  loadMoreArticles,
};



export default connect(null, actions)(LoadMoreButton);
