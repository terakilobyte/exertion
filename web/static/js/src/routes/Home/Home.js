import React from 'react'
import { Link } from 'react-router'
import './Home.scss'
import PresentationCard from '../../components/PresentationCard'

const Home = () => (
  <div>
    <h3>Trying to make the juice worth the <span className='squeeze'><em>squeeze</em></span></h3>
    <Link to='about'>
      <PresentationCard content='About Me' />
    </Link>
    <Link to='projects'>
      <PresentationCard content='Projects' />
    </Link>
  </div>
)

export default Home
