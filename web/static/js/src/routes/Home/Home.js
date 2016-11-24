import React from 'react'
import PresentationCard from '../../components/PresentationCard'
import './Home.scss'

const Home = (props) => (
  <div className='center-home'>
    <h3>Make the juice worth the <span className='squeeze'><em>squeeze</em></span></h3>
    <a href='hire'>
      <PresentationCard content='Hire' />
    </a>
    <PresentationCard content='Work' />
  </div>
)

export default Home
