import React from 'react';
import HEADER_DATA from './header_data.component'


function HubSubheaders(links) {
  const page = links.props ? links.props : 'home'
  const data = HEADER_DATA
  return (
    <div className='sub-header-row'>
        {data.pages[page].map(item => (
          <div className='sub-header-item'>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
  )
}



export default HubSubheaders;

/*

class HudSubheaderDirectory extends React.Component {
  constructor(props) {
    super(props);
    console.log(`on the: ${this.page}`);
    
  }
  render() {
    return (
      <div className='sub-header-row'>
        {this.state.pages.about.map(item => (
          <div className='sub-header-item'>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default HudSubheaderDirectory;
*/
