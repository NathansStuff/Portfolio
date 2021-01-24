import './about.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import HudSubheaderDirectory from '../../components/hud/hud-subheaders.component';
import CustomLine from '../../components/custom-line/custom-line.component';

function AboutPage() {
  return (
    <div>
      <CustomLine />
      <div className='about-top'>
        <h3 className='about-top-header'>Who Am I?</h3>

        <div class='submenu-wraper'>
          <div class='submenu-lefthand'>
            <div className='submenu-item'>
              <div className='submenu-item-left'>
                <p>Name</p>
              </div>
              <div className='submenu-item-right'>
                <p>Nathan</p>
              </div>
            </div>
            <div className='submenu-item'>
              <div className='submenu-item-left'>
                <p>Age</p>
              </div>
              <div className='submenu-item-right'>
                <p>28</p>
              </div>
            </div>
            <div className='submenu-item'>
              <div className='submenu-item-left'>
                <p>Location</p>
              </div>
              <div className='submenu-item-right'>
                <p>Sydney</p>
              </div>
            </div>
          </div>
          <div className='submenu-righthand'>
            <p>
              Hi! I'm a fullstack developer based in Sydney, Australia. Check
              out my{' '}
              <Link className='link-decorator' to='/projects'>
                work{' '}
              </Link>
              and drop me a line if you want to work together{' '}
              <Link className='link-decorator' to='/contact'>
                here
              </Link>
              .
              <CustomButton className='custom-button about-bio' type='submit'>
                Download Resume
              </CustomButton>
            </p>
          </div>
        </div>
        <h3>Techstack</h3>
        <p></p>

        <div className='about-bot'>
          <HudSubheaderDirectory props={'techstack'} />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
