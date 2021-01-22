import React from 'react';
import HEADER_DATA from './header_data.component';
import AboutHudPage from '../../pages/about/about-hud.component';

function DeterminePage(links) {
  const page = links.props ? links.props : 'home';
  console.log(page);
}

function HubSubheaders(links) {
  const page = links.props ? links.props : 'home';
  const data = HEADER_DATA;
  const object = data.pages[`${page}_data`];
  DeterminePage(links);
  return (
    <div>
      <div className='sub-header-row'>
        {data.pages[page].map(item => (
          <div className='sub-header-item'>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className='custom-line'></div>
      <div class='submenu-wraper'>
        <div className='submenu-item'>
          <div className='submenu-item-left'><p>Name</p></div>
          <div className='submenu-item-right'><p>Nathan</p></div>
        </div>
        <div className='submenu-item'>
          <div className='submenu-item-left'><p>Age</p></div>
          <div className='submenu-item-right'><p>28</p></div>
        </div>
      </div>
    </div>
  );
}

export default HubSubheaders;

/*
 <div className='custom-line'></div>
        {data.pages[`${page}_data`].map(idx => (
          <div className='submenu-item'>
            <div className='submenu-item-left'>!!!{Object.keys(object[0])}</div>
            <div className='submenu-item-right'>{Object.values(object[0])}</div>
          </div>
        ))}
    </div>
    */
