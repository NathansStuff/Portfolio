import React from 'react';
import HEADER_DATA from './header_data.component';
import Page from './hud-individual-page.component';

function HubSubheaders(links) {
  const page = links.props ? links.props : 'home';
  const data = HEADER_DATA;
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
      <Page props={links} />
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
