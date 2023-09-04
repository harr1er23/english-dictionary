import React from 'react'
import {Link} from "react-router-dom"

const SidebarButton = ({text, svg, link,clickButton, setClickButton, setIsShrinkView}) => {

  const onClickLink = (link) => {
    setIsShrinkView(true)
    setClickButton(link)
  }

  return (
    <>
        <li className={`sidebar-listItem${clickButton === link ? " active" : ""}`}>
              <Link  onClick={() => onClickLink(link)} to={link}>
                {svg}
                <span className="sidebar-listItemText">{text}</span>
              </Link>
            </li>
    </>
  )
}

export default SidebarButton