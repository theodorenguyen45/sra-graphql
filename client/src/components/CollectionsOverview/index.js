import React from 'react'

import CollectionPreview from 'components/CollectionPreview'

import './style.scss'

export default ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)
