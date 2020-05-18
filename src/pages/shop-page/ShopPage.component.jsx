import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from './../../components/collections-overview/CollectionOverview.component';
import CollectionPage from '../collection-page/CollectionPage.component';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact={true} path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
