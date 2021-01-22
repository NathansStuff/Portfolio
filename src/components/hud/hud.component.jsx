import React from 'react';
import './hud.styles.scss';
import AvatarComponent from '../avatar-component/avatar-component.component';
import HudPages from '../hud-pages/hud-pages.component';
import HudSubheaderDirectory from './hud-subheaders.component';

class HudClass extends React.Component {
  constructor(props) {
    super(props);
    this.page = props.location.pathname.substring(1); // returns '/about'
    console.log(`current page: ${this.page}`);
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
                <HudSubheaderDirectory props={this.page} />
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
