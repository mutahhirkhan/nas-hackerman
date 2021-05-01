import React from "react";
import { connect } from "react-redux";
import { loadMoreArticles } from "./../../Redux/loadMore/loadMoreActions";
import Heading  from "src/Components/Heading/Heading";
import "./LoadMoreButton.css";

const LoadMoreButton = ({ loadMoreArticles}) => {
  // console.log(moreComments)
  // const [comments, setComments] = React.useState([...moreComments]);

  React.useEffect(() => {
    //CDM
    loadMoreArticles();
  }, []);
  console.log()
  return (
    <div className="loadMoreBtn center">
      <button className="loadMoreContent" onClick={() => loadMoreArticles()}>
        <Heading fontWeight="bold" fontSize={10}>Load More</Heading>
        </button>
    </div>
  );
};

var actions = {
  loadMoreArticles,
};

// var mapState = (state) => ({
//   moreComments: state.comments
// })

export default connect(null, actions)(LoadMoreButton);
