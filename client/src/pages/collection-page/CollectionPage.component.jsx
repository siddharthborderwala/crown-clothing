import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from './../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/CollectionItem.component.jsx';
import './collection-page.styles.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = Object(collection);

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
