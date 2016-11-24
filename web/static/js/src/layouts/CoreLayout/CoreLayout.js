import React from 'react'
import Navigation from '../../components/Navigation/Navigation.js'
import './CoreLayout.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <Navigation />
    <div className='center-flex'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
