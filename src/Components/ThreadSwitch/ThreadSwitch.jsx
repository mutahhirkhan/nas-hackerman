import React from "react";
import "./ThreadSwitch.css";
import Heading from "src/Components/Heading/Heading";
import { connect } from "react-redux";
import { switchToNew, switchToPast } from './../../Redux/switcher/switcherActions';

const ThreadSwitch = ({switchToNew, switchToPast, switchValue}) => {
  var [bgColor, setBgColor] = React.useState("new")
  
  var changeColor = (e) => {
    console.log(bgColor+"bgcolor")
    if(bgColor==="new")
    {
      console.log('new')
      document.querySelector(".option1").style.background=`${"var(--primary-color)"}`
      document.querySelector(".option2").style.background=`none`
      // document.querySelector(".option1").classList.add("addColor")
      // document.querySelector(".option2").classList.remove("addColor")
    }
    if(bgColor === "past")
    {
      console.log('past')
      document.querySelector(".option1").style.background="none"
      document.querySelector(".option2").style.background=`${"var(--primary-color)"}`

      // document.querySelector(".option1").classList.remove("addColor")
      // document.querySelector(".option2").classList.add("addColor")
    }
  }
  React.useEffect(() => {
    changeColor()
  },[])
      
      return (
    <div className="switcher">
      
        {/* {switchValue.new === "selected"} */}
      <div
      onClick={() => {setBgColor("new"); switchToNew(); changeColor(); }} className="option option1">
        <Heading fontWeight="extra" fontSize={10}>New</Heading>
      </div>
      <div 
      onClick={() => {setBgColor("past"); switchToPast(); changeColor(); }} className="option option2">
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
