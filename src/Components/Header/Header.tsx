import { FC } from 'react'
import './Header.css'

interface IHeader {
  changeColor?: boolean
  style?: React.CSSProperties
}

const Header: FC<IHeader> = ({ changeColor = false, style = {} }) => {
  return (
    <div className="center topHeader" style={style}>
      {changeColor ? <span>HACKER</span> : <>HACKER</>}
      NEWS
      {changeColor ? <span>.</span> : <>.</>}
    </div>
  )
}

export default Header
