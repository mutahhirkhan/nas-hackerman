import React, { FC } from 'react'
import Paragraph from '@components/Paragraph/Paragraph'
import Heading from '@components/Heading/Heading'
import { Link } from 'react-router-dom'
import svgClock from '@assets/clock.svg'
import './ArticleCard.css'
import { Item } from '@utils/interfaces'

type IArticleCard = {
  innerRef?: any
} & Partial<Item>

const ArticleCard: FC<IArticleCard> = ({ title, text, url, time, descendants, innerRef }) => {
  return (
    <>
      <Link ref={innerRef} to={url || ''} target="_blank" className={`${!url && 'no-url'}`}>
        <div className='card'>
          <Heading fontWeight="bold" fontSize={12}>
            {title ? title : 'Lorem ipsum dolor sit amet.'}
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
              {/* //time converted to date time format
            //then splitted into time and time zone sections
             */}
              {time ? String(new Date(time * 1000)).split('GMT')[0] : 'Time Not Available'}
            </Paragraph>
            <p> | </p>
            <Paragraph fontWeight="regular" fontSize={8}>
              {(descendants ? descendants : 0) + ' Comments'}
            </Paragraph>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ArticleCard
