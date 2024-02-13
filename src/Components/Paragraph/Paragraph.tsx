import React from 'react'
import './Paragraph.css'

interface IParagraph {
  children: string | TrustedHTML
  fontSize?: number
  fontWeight?: 'extra' | 'bold' | 'regular'
  color?: React.CSSProperties['color']
  style?: React.CSSProperties
  className?: string
}

const Paragraph: React.FC<IParagraph> = ({
  children,
  fontSize = 16,
  fontWeight = 'regular',
  color = 'black',
  style = {},
  ...restProps
}) => {
  const fontWeightCal = (weightStr: string) => {
    switch (weightStr) {
      case 'bold':
        return 700
      case 'extra':
        return 800
      default:
        return 400
    }
  }
  const fontWeightValue = fontWeightCal(fontWeight)
  const fontSizeValue = fontSize / 10
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
      dangerouslySetInnerHTML={{ __html: children }}
    ></div>
  )
}

export default Paragraph
