import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import Heading from '../Heading/Heading'
import { Link } from 'react-router-dom'
import svgClock from 'src/Assets/clock.svg'
import './ArticleCard.css'

const ArticleCard = ({ title, text, by, url, time, descendants, innerRef }) => {
  //time converted to date time format
  time = String(new Date(time * 1000))
  //then splitted into time and time zone sections
  time = time.split('GMT')[0]

  return (
    <>
      <Link ref={innerRef} to={{ pathname: `${url}` }} target="_blank" className={`${!url && 'no-url'}`}>
        <div className={`card`}>
          <Heading fontWeight="bold" fontSize={12}>
            {title ? title : `Lorem ipsum dolor sit amet.`}
          </Heading>
          <Paragraph fontWeight="regular" fontSize={10}>
            {text
              ? text
              : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima voluptatibus at ab atque officiis, ipsa totam. Ullam
              amet facere possimus eveniet mollitia non reprehenderit iusto expedita, illo fugiat ab quidem, provident architecto
              voluptatibus sint modi consectetur ratione ut eos?`}
          </Paragraph>

          <div className="card-details">
            <img src={svgClock} alt="svgClockk" width="13px" />
            <Paragraph fontWeight="regular" fontSize={8}>
              {time ? time : `Time Not Available`}
            </Paragraph>
            <p> | </p>
            <Paragraph fontWeight="regular" fontSize={8}>
              {descendants ? descendants + ' Comments' : `0 Comments`}
            </Paragraph>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ArticleCard
