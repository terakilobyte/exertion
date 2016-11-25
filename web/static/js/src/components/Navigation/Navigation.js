import React from 'react'
import { Link } from 'react-router'
import './Navigation.scss'

const Navigation = () => (
  <div className='nav'>
    <ul className='left'>
      <li>
        <h1>
          <Link to='/'>
            Exertion
          </Link>
        </h1>
      </li>
    </ul>
    <ul className='right'>
      <li className='hover-effect'>About</li>
      <li className='hover-effect'>Account</li>
    </ul>
  </div>
)

export default Navigation
