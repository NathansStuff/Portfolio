import React from 'react';
import './hud.styles.scss';
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.jpg';
import AvatarComponent from '../avatar-component/avatar-component.component';
import HudPages from '../hud-pages/hud-pages.component'

const Hud = () => (
  <div className='avatar-hud'>
    <div className='avatar'>
      <AvatarComponent />
    </div>
    <div className='hud-wrapper'>
      <HudPages/>
      
      <div className='about-wrapper'>
        <div className='sub-headers'>
          <div className='sub-header-row'>
            <div className='sub-header-item'>
              <img src={github} alt='github' />
              <p>Github</p>
            </div>
            <div className='sub-header-item'>
              <img src={twitter} alt='twitter' />
              <p>Twitter</p>
            </div>
            <div className='sub-header-item'>
              <img src={linkedin} alt='linkedin' />
              <p>Linkedin</p>
            </div>
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

export default Hud;
