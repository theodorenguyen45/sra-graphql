import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collectionitem/CollectionItem';

import { selectCollection } from '../../redux/shop/ShopSelector';

import './Collection.scss';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapstateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapstateToProps)(Collection);
