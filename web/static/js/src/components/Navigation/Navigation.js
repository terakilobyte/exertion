import React from 'react'
import { Link } from 'react-router'
import './Navigation.scss'

const Navigation = () => (
  <div className='nav'>
    <ul className='left'>
      <li>
        <h1>
          <Link to='/' className='website-name'>
            Exertion
          </Link>
        </h1>
      </li>
    </ul>
    <ul className='right'>
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
