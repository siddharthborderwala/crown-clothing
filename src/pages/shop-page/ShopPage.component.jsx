import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from './../../components/collections-overview/CollectionOverview.container';
import CollectionPageContainer from '../collection-page/CollectionPage.container';

import { fetchCollectionsStart } from './../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStart, match: { path } }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route exact={true} path={`${path}`} component={CollectionsOverviewContainer} />
      <Route path={`${path}/:collectionId`} component={CollectionPageContainer} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(undefined, mapDispatchToProps)(ShopPage);
