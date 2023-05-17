import React from "react";
import "./Paragraph.css";

const Paragraph = ({
  children,
  fontSize = 16,
  fontWeight = "regular",
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
      className="paragraph"
      style={{
        fontWeight: fontWeightValue,
        fontSize: `${fontSizeValue}em`,
        color,
        ...style,
      }}
      dangerouslySetInnerHTML={{__html: children}}
    >
    </div>
  );
};

export default Paragraph;
