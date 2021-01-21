import React from 'react';
import './about.styles.scss';
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.jpg';

const AboutPage = () => (
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
      <div className='about'></div>
    </div>
  </div>
);

export default AboutPage;
