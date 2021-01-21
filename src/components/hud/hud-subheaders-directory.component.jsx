import React from 'react';

import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.jpg';

class HudSubheaderDirectory extends React.Component {
  constructor(props) {
    super(props);
    console.log(`on the: ${this.page}`);
    this.state = {
      pages: {
        about: [
          {
            title: 'Twitter',
            key: 1,
            image: twitter,
          },
          {
            title: 'Github',
            key: 2,
            image: github,
          },
          {
            title: 'Linkedin',
            key: 3,
            image: linkedin,
          },
        ],
        key: 1
      },
    };
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
