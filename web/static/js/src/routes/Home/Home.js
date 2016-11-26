import React from 'react'
import { Link } from 'react-router'
import PresentationCard from '../../components/PresentationCard'
import './Home.scss'

const Home = (props) => (
  <div className='center-home'>
    <h3>Trying to make the juice worth the <span className='squeeze'><em>squeeze</em></span></h3>
    <Link className='presentation-link' to='tictactoe'>
      <PresentationCard content='Tic-Tac-Toe' />
    </Link>
    <Link className='presentation-link' to='counter'>
      <PresentationCard content='Counter' />
    </Link>
  </div>
)

Home.displayName = 'Home'

export default Home
