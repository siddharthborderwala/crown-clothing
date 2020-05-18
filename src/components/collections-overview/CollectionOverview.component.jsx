import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/CollectionPreview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {Array.from(collections, (val) => val[1]).map(
      ({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      )
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
