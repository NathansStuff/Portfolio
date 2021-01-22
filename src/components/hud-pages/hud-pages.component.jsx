import React from 'react';
import './hud-pages.styles.scss';
import { Link } from 'react-router-dom';

const HudPages = () => (
  <div className='hud-pages'>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/projects'>Projects</Link>
    <h4>Contact</h4>
  </div>
);

export default HudPages;
