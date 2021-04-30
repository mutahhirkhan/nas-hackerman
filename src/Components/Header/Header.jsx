import React from "react";
import "./Header.css";

const Header = ({ changeColor = false }) => {
  return (
    <div className="header center">
      {changeColor ? <span>HACKER</span> : <>HACKER</>}NEWS.
      
    </div>
  );
};

export default Header;
