import React from 'react';
import AboutPage from '../../pages/about/about.component'


function Page(links) {
  const page = links.props.props ? links.props.props : 'home';
  if (page === 'about') {
      return AboutPage()
  } else {
    return <p>not about</p>;
  }
}

export default Page;
