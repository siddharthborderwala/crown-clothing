import React from 'react';
import { withRouter } from 'react-router-dom';

const NotFoundPage = ({ location }) => (
  <div
    style={{
      textAlign: 'center',
    }}
  >
    <h1>The Page you are looking for is NOT FOUND</h1>
    <h2>
      <strong>404 ERROR</strong>
      <br />
      <em>"{location.pathname}" does not exist</em>
    </h2>
  </div>
);

export default withRouter(NotFoundPage);
