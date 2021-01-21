import React from 'react';

import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.jpg';

class HudSubheaderDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      pages: {
        about: [
          {
            title: 'twitter',
            id: 1,
            image: twitter,
          },
        ],
      },
    };
  }
}

export default HudSubheaderDirectory;
