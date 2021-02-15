import React, { Fragment } from 'react';
import './avatar-component.styles.scss';

const AvatarComponent = () => {
  return (
    <Fragment>
      <div className='hud-pages'>
        <span>Nathan O'Donnell</span>
      </div>
      <div className='sprite'></div>
    </Fragment>
  );
};

export default AvatarComponent;
