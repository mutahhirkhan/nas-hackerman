import React from 'react'
import './Header.css'

const Header = ({ changeColor = false, style = {} }) => {
  return (
    <div className="center topHeader">
      {changeColor ? <span>HACKER</span> : <>HACKER</>}
      NEWS
      {changeColor ? <span>.</span> : <>.</>}
    </div>
  )
}

export default Header
