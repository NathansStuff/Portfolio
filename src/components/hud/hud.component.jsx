import React from 'react';
import './hud.styles.scss';
import AvatarComponent from '../avatar-component/avatar-component.component';
import HudPages from '../hud-pages/hud-pages.component';
import PicsRow from '../pics-row/pics-row.component';

class HudClass extends React.Component {
  constructor(props) {
    super(props);
    this.page = props.location.pathname.substring(1); // returns 'about'
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
              <PicsRow props={this.page} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HudClass;
