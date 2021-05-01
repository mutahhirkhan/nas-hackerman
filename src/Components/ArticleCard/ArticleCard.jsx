import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Heading from "../Heading/Heading";

const ArticleCard = (props) => {
  console.log(props)
  return (
    <div>
      <Heading fontWeight="bold" fontSize={12}>Lorem ipsum dolor sit amet.</Heading>
      <Paragraph fontWeight="regular" fontSize={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima
        voluptatibus at ab atque officiis, ipsa totam. Ullam amet facere
        possimus eveniet mollitia non reprehenderit iusto expedita, illo fugiat
        ab quidem, provident architecto voluptatibus sint modi consectetur
        ratione ut eos? Provident obcaecati veritatis perferendis id recusandae
        minima vel ducimus sint.
      </Paragraph>
    </div>
  );
};

export default ArticleCard;
