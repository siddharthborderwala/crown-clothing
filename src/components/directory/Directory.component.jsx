import React from 'react';
import sections from './directory.data';
import MenuItem from './../menu-item/MenuItem.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, linkUrl, size }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            linkUrl={linkUrl}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
