import React from 'react'

import { Route } from 'react-router-dom'

import { default as CollectionsOverview } from 'components/CollectionsOverview/container'
import { default as CollectionPage } from 'pages/CollectionPage/container'

export default ({ match }) => {
  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverview}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  )
}
