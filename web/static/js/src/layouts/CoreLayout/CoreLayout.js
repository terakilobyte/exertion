import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import './CoreLayout.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <div className='navigation'>
      <Navigation />
    </div>
    <div className='center-flex'>
      {children}
    </div>
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
