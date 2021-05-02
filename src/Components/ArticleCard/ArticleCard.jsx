import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";
import svgClock from "src/Assets/clock.svg"

const ArticleCard = ({title, text, by, url, time, descendants}) => {
  
  //time converted to date time format
  time = String(new Date(time * 1000));
  //then splitted into time and time zone sections
  time = time.split("GMT")[0]
  
  
  return (
      <Link to={{ pathname: `${url}` }} target="_blank">
    <div style={{borderRadius:"10px", boxShadow: "0 5px 10px 2px rgba(0,0,0,0.15)", padding: "10px", margin:"5px 10px 5px 5px", display:"flex", flexFlow:"column", rowGap:"7px" }}>
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
     
      <div style={{display:"flex", gap:"3px", alignItems:"center"}}>
        <img src={svgClock} alt="svgClockk"  width="13px"/>
        {time ? <Paragraph fontWeight="regular" fontSize={8}>{time}</Paragraph>
        : <Paragraph fontWeight="regular" fontSize={8}>Time Not Available</Paragraph>
        }
        <p> | </p> 
        {descendants ? <Paragraph fontWeight="regular" fontSize={8}>{descendants} Comments</Paragraph>
        : <Paragraph fontWeight="regular" fontSize={8}>0 Comments</Paragraph>
        }
      </div>
    </div>
    </Link>
  );
};

export default ArticleCard;
