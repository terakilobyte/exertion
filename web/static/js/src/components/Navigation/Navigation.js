import React from 'react'
import { Link } from 'react-router'
import './Navigation.scss'

const Navigation = () => (
  <div className='nav'>
    <ul className='right'>
      <li className='only-small hover-effect'>
        <Link to='/'>Home</Link>
      </li>
      <li className='hover-effect'>
        <a href='https://github.com/terakilobyte'>GitHub</a>
      </li>
      <li className='hover-effect'>
        <a href='https://twitter.com/terakilobyte'>Twitter</a>
      </li>
      <li className='hover-effect'>
        <a href='https://blog.exertion.io'>Blog</a>
      </li>
    </ul>
  </div>
)

export default Navigation
