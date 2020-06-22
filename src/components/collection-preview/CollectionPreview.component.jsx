import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from './../collection-item/CollectionItem.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, history, match: { path } }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => {
        history.push(`${path}/${title.toLowerCase()}`);
      }}
    >
      {title}
    </h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
