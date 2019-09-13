import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from 'redux/shop/ShopActions';
import { selectIsCollectionFetching } from 'redux/shop/ShopSelector';

import { Route } from 'react-router-dom';

import CollectionsOverview from 'components/CollectionOverview';
import Collection from 'pages/CollectionPage';

import WithSpinner from 'components/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
  unsubcribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isLoading } = this.props;

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

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
