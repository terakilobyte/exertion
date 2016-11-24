import React from 'react'
import Navigation from '../../components/Navigation.js'
import './CoreLayout.scss'

export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Navigation />
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
