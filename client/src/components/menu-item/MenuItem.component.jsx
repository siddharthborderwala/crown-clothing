import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

export const MenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) => (
  <div
    className={`menu-item ${size ? size : ''}`}
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
    }}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
