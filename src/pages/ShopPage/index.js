import React from 'react'

import { Route } from 'react-router-dom'
import Spinner from 'components/Spinner'

const CollectionsOverview = React.lazy(() =>
  import('components/CollectionsOverview/container')
)
const CollectionPage = React.lazy(() =>
  import('pages/CollectionPage/container')
)

export default ({ match }) => (
  <div className='shop-page'>
    <React.Suspense fallback={<Spinner />}>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverview}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </React.Suspense>
  </div>
)
