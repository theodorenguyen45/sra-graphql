import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

import './style.scss'

export default ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory()
  const match = useRouteMatch()

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='background-image'
      ></div>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='suptitle'>SHOP NOW</span>
      </div>
    </div>
  )
}
