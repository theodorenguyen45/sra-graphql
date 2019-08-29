import React from 'react';
import './Menu-Item.scss';

export default ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='background-image'
      ></div>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='suptitle'>SHOP NOW</span>
      </div>
    </div>
  );
};
