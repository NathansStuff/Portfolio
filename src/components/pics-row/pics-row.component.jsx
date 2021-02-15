import React from 'react';
import HEADER_DATA from '../hud/header_data.component';
import Page from '../hud/hud-individual-page.component';
import './pics-row.styles.scss'

function PicsRow(links) {
  const page = links.props ? links.props : 'home';
  const data = HEADER_DATA;
  return (
    <div>
      <div className={`sub-header-row ${page}`}>
        {data.pages[page].map(item => (
          <div className='sub-header-item extra-height'>
            <img src={item.image} alt={item.title}  />
            <p className='sub-header-title'>{item.title}</p>
          </div>
        ))}
      </div>
      <Page props={links} />
    </div>
  );
}

export default PicsRow;
