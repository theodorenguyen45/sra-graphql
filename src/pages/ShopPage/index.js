import React from 'react'

import { Route } from 'react-router-dom'

import CollectionsOverviewContainer from 'components/CollectionsOverview'
import CollectionPageContainer from 'pages/CollectionPage'

export default ({ match }) => {
  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  )
}
