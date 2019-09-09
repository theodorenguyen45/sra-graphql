import React from 'react';

import { Route } from 'react-router-dom';

import CollectionsOverview from 'components/collection-overview/Collection-Overview';
import Collection from 'pages/collection/Collection';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;
