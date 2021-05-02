import React from "react";
import { connect } from "react-redux";
import { loadPastArticles } from "../../Redux/loadPast/loadPastActions";
import { loadNewArticles } from './../../Redux/loadNew/loadNewActions';
import Heading from "src/Components/Heading/Heading";
import "./LoadMoreButton.css";

const LoadMoreButton = ({ loadPastArticles, loadNewArticles, switchValue }) => {
  
  var loadArticles = () => {
    if(switchValue.new === "selected") {
      // console.log("new")
      loadNewArticles();
    }
    else if(switchValue.past === "selected"){
      // console.log("past")
      loadPastArticles();
    }
  }
  // console.log(moreComments)
  // const [comments, setComments] = React.useState([...moreComments]);

  React.useEffect(() => {
    //CDM
    loadPastArticles();
    loadNewArticles()
  }, []);
  return (
    <div className="loadMoreBtn center" onClick={loadArticles}>
      <button className="loadMoreContent">
        <Heading fontWeight="bold" fontSize={10}>
          Load More
        </Heading>
      </button>
    </div>
  );
};

var actions = {
  loadPastArticles,
  loadNewArticles,
};

var mapState = (state) => ({
  newArticles: state.newArticles,
  switchValue: state.switch
})

export default connect(mapState, actions)(LoadMoreButton);
