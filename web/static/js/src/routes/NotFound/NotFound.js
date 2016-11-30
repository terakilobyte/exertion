/**
 * Created by terakilobyte on 11/23/16.
 */
import React from 'react'
import './NotFound.scss'
const notFound = () => (
  <div className=''>
    <h1 className='fowerText'>
      Sorry, the page you were trying to view doesn't exist
    </h1>
    {/* <svg className='fowerMask' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="5"/>
        </svg> */}
    <div className='clipCircle' />
    <svg xmlns="http://www.w3.org/2000/svg" width="170" height="200" className='clipCircle'>
      <defs>
        <filter id="filter">
          <feGaussianBlur stdDeviation="5"/>
        </filter>
        <mask id="mask">
          <ellipse cx="50%" cy="50%" rx="25%" ry="25%" fill="white" filter="url(#filter)"></ellipse>
        </mask>
      </defs>
    </svg>
    <image className='fowerOhfower' mask='url(#mask)' />
    <img className='fowerOhMask' />
  </div>
)

export default notFound
