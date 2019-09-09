import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreView } from '../../redux/shop/ShopSelector';

import CollectionPreview from '../collectionpreview/CollectionPreview';

import './CollectionOverview.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreView
});

export default connect(mapStateToProps)(CollectionsOverview);
