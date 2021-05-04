import React from "react";
import "./Header.css";

const Header = ({ changeColor = false, padding = 0, style = {} }) => {
  return (
    <div style={{ ...style, padding: `${padding}` }} className="topHeader center">
      {changeColor ? <span>HACKER</span> : <>HACKER</>}
      NEWS
      {changeColor ? <span>.</span> : <>.</>}
    </div>
  );
};

export default Header;
