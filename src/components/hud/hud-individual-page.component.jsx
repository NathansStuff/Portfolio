import React from 'react';

function Page(links) {
  const page = links.props.props ? links.props.props : 'home';
  if (page === 'about') {
    return (
      <div class='submenu-wraper'>
        <div className='submenu-item'>
          <div className='submenu-item-left'>
            <p>Name</p>
          </div>
          <div className='submenu-item-right'>
            <p>Nathan</p>
          </div>
        </div>
        <div className='submenu-item'>
          <div className='submenu-item-left'>
            <p>Age</p>
          </div>
          <div className='submenu-item-right'>
            <p>28</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>h</p>;
  }
}

export default Page;
