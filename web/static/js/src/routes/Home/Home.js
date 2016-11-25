import React from 'react'
import { Link } from 'react-router'
import PresentationCard from '../../components/PresentationCard'
import './Home.scss'

const Home = (props) => (
  <div className='center-home'>
    <h3>Make the juice worth the <span className='squeeze'><em>squeeze</em></span></h3>
    <Link className='presentation-link' to='hire'>
      <PresentationCard content='Hire' />
    </Link>
    <Link className='presentation-link' to='poop'>
      <PresentationCard content='Work' />
    </Link>
  </div>
)

Home.displayName = 'Home'

export default Home
