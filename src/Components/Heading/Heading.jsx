import React from "react";
import "./Heading.css";

const Header = ({
  children,
  fontSize = 16,
  fontWeight = "bold",
  color = "black",
  style = {},
  ...restProps
}) => {
  var fontWeightCal = (weightStr) => {
    switch (weightStr) {
      case "regular":
        return 400;
      case "bold":
        return 700;
      case "extra":
        return 800;
      default:
        return 400;
    }
  };
  var fontWeightValue = fontWeightCal(fontWeight);
  var fontSizeValue = fontSize / 10;
  return (
    <div
      {...restProps}
      className="heading"
      style={{ fontWeight: fontWeightValue, fontSize: `${fontSizeValue}em`, color,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Header;
