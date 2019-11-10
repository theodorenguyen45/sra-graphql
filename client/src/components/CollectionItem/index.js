import React from 'react'

import CustomButton from 'components/CustomButton'

import './style.scss'

export default ({ item, addItem }) => {
  const { name, price, imageUrl } = item

  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton
        className='custom-button inverted'
        onClick={() => addItem(item)}
      >
        Add to cart
      </CustomButton>
    </div>
  )
}
