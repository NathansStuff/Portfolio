import React from 'react';
import './hud.styles.scss';
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.jpg';
import AvatarComponent from '../avatar-component/avatar-component.component';
import HudPages from '../hud-pages/hud-pages.component';
import HudSubheaderDirectory from './hud-subheaders-directory.component';

class HudClass extends React.Component {
  constructor(props) {
    super(props);
    this.page = props.location.pathname;
    console.log(`current page: ${this.page}`);
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
        key: 1,
      },
    };
  }

  render(props) {
    return (
      <div className='avatar-hud'>
        <div className='avatar'>
          <AvatarComponent />
        </div>
        <div className='hud-wrapper'>
          <HudPages />
          <div className='about-wrapper'>
            <div className='sub-headers'>
              <div className='sub-header-row'>
                {this.state.pages.about.map(item => (
                  <div className='sub-header-item'>
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
              <div className='custom-line'></div>
            </div>
          </div>
          <div className='submenu-item'>
            <div className='submenu-item-left'>Name: Nathan</div>
            <div className='submenu-item-right'>Descripton of name</div>
          </div>
        </div>
      </div>
    );
  }
}
export default HudClass;
