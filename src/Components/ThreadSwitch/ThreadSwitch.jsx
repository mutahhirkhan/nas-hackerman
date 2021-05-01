import React from "react";
import "./ThreadSwitch.css";
import Heading from "src/Components/Heading/Heading";
import { connect } from "react-redux";
import { switchToNew, switchToPast } from './../../Redux/switcher/switcherActions';

const ThreadSwitch = ({switchToNew, switchToPast, switchValue}) => {
  var [bgColor, setBgColor] = React.useState("new")

    var changeColor = (e) => {
        console.log(e.target.style.background)
        if(switchValue.new)
            e.target.style.background = `${"var(--primary-color)"}`
        if(switchValue.past)
            e.target.style.background = `${"var(--primary-color)"}`
        else e.target.style.background = ""
    }

  return (
    <div className="switcher">
      
        {switchValue.new === "selected"}
      <div
      onClick={switchToNew, changeColor} className="option option1">
        <Heading fontWeight="extra" fontSize={10}>New</Heading>
      </div>
      <div onClick={switchToPast, changeColor} className="option option2">
        <Heading fontWeight="extra" fontSize={10}>Past</Heading>
      </div>

    </div>
  );
};

var actions = {
    switchToNew,
    switchToPast
}

var mapState = (state) => ({
    switchValue: state.switch
})

export default connect(mapState, actions)(ThreadSwitch);
