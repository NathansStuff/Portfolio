import React from "react"
import './background-box.styles.scss'

const BackgroundBox = ({ children, ...otherProps }) => (
    <div className='background-box' {...otherProps}>
      {children}
    </div>
  );
export default BackgroundBox