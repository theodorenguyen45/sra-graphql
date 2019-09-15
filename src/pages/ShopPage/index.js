import React from 'react';

import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from 'redux/shop/ShopActions';

import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from 'components/CollectionsOverview/container';
import CollectionPageContainer from 'pages/CollectionPage/container';

class ShopPage extends React.Component {
  unsubcribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

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
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
