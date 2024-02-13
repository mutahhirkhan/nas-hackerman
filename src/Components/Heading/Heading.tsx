import { FC } from 'react'
import './Heading.css'

interface IHeader {
  children: string | TrustedHTML
  fontSize?: number
  fontWeight?: 'extra' | 'bold' | 'regular'
  color?: React.CSSProperties['color']
  style?: React.CSSProperties
  className?: string
}

const Header: FC<IHeader> = ({ children, fontSize = 16, fontWeight = 'bold', color = 'black', style = {}, ...restProps }) => {
  const fontWeightCal = (weightStr: string) => {
    switch (weightStr) {
      case 'regular':
        return 400
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
      className="heading"
      style={{ fontWeight: fontWeightValue, fontSize: `${fontSizeValue}em`, color, ...style }}
      dangerouslySetInnerHTML={{ __html: children }}
    >
      {/* {children} */}
    </div>
  )
}

export default Header
