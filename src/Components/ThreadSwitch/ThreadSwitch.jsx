import React from "react";
import "./ThreadSwitch.css";
import Heading from "src/Components/Heading/Heading";
import { connect } from "react-redux";
import { switchToNew, switchToPast } from "./../../Redux/switcher/switcherActions";

const ThreadSwitch = ({ switchToNew, switchToPast }) => {
	const [isNew, setIsNewPost] = React.useState(true);

	const toggleNews = (name) => {
		if (name === "new") {
			switchToNew();
			setIsNewPost(true);
		} else {
			switchToPast();
			setIsNewPost(false);
		}
	};

	return (
		<div className="switcher">
			<div onClick={() => toggleNews("new")} className={`option option1 ${isNew ? "addColor" : ""}`}>
				<Heading fontWeight="extra" fontSize={10}>
					New
				</Heading>
			</div>
			<div onClick={() => toggleNews("past")} className={`option option2 ${!isNew ? "addColor" : ""}`}>
				<Heading fontWeight="extra" fontSize={10}>
					Past
				</Heading>
			</div>
		</div>
	);
};

const actions = {
	switchToNew,
	switchToPast,
};

// const mapState = (state) => ({
// 	switchValue: state.switch,
// });

//the first argument is null because we don't need to get any state from the store
export default connect(null, actions)(ThreadSwitch);
