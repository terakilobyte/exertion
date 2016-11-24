import React from 'react'
import PresentationCard from '../../components/PresentationCard'
import './Home.scss'

const Home = (props) => (
  <div>
    <h3>Make the juice worth the <span className='squeeze'><em>squeeze</em></span></h3>
    <PresentationCard content='Hire' />
    <PresentationCard content='Work' />
  </div>
)

export default Home
