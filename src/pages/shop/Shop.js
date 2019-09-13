import React from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collectionoverview/CollectionOverview';
import Collection from '../collection/Collection';

import WithSpinner from '../../components/withspinner/WithSpinner';

import { updateCollections } from '../../redux/shop/ShopActions';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/FirebaseUtils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
  state = {
    isLoading: true
  };

  unsubcribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapShot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapShot);

      updateCollection(collectionMap);
      this.setState({ isLoading: false });
    });
  }

  // componentWillUnmount() {
  //   this.unsubcribeFromSnapshot();
  // }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollection: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
