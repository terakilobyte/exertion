import React from 'react'
import { Link } from 'react-router'
import './Footer.scss'

const Footer = () => (
  <div className='root'>
    <div className='footerContainer'>
      <span className='text'>© Exertion</span>
      <span className='spacer'>·</span>
      <Link className='footerLink' to='/'>Home</Link>
      <span className='spacer'>·</span>
      <Link className='footerLink' to='/not-found'>Not Found</Link>
    </div>
  </div>
)

export default Footer
