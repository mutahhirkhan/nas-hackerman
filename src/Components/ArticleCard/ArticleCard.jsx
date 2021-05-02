import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";

const ArticleCard = ({title, text, by, url}) => {
  console.log(title, text, by, url)
  return (
      <Link to={{ pathname: `${url}` }} target="_blank">
    <div>
      {title ? 
      <Heading fontWeight="bold" fontSize={12}>{title}</Heading> 
      : <Heading fontWeight="bold" fontSize={12}>Lorem ipsum dolor sit amet.</Heading>
      }
      {text ? 
      <Paragraph fontWeight="regular" fontSize={10}>{text}</Paragraph> 
      :<Paragraph fontWeight="regular" fontSize={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima
        voluptatibus at ab atque officiis, ipsa totam. Ullam amet facere
        possimus eveniet mollitia non reprehenderit iusto expedita, illo fugiat
        ab quidem, provident architecto voluptatibus sint modi consectetur
        ratione ut eos?
      </Paragraph>
      }
      {by ? 
      <Paragraph fontWeight="regular" fontSize={8}>{by}</Paragraph>
      : <Paragraph fontWeight="regular" fontSize={8}>Anonymous</Paragraph>
      }
      
    </div>
    ________________________________________________________
    </Link>
  );
};

export default ArticleCard;
