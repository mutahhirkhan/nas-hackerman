import React from "react";
import "./Header.css";

const Header = ({ changeColor = false, padding = 0, style = {} }) => {
  return (
    <div style={{ ...style, 
    padding: `${padding}`,  
    width: "100%",
    fontFamily: `${"var(--font-family)"}`,
    fontWeight: `${"var(--extra-bold)"}`,
    backgroundColor: "white",
    flexFlow: "initial",
    fontSize: "1.5rem",
    boxShadow: "0 5px 5px rgba(0,0,0,0.1)" }} className="center">
      {changeColor ? <span>HACKER</span> : <>HACKER</>}
      NEWS
      {changeColor ? <span>.</span> : <>.</>}
    </div>
  );
};

export default Header;
