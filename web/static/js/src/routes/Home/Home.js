import React from 'react'
import { Link } from 'react-router'
import PresentationCard from '../../components/PresentationCard'
import styles from './Home.scss'

const Home = (props) => (
  <div id='centerHomeID' className={styles.centerHome}>
    <h3>Trying to make the juice worth the <span className={styles.squeeze}><em>squeeze</em></span></h3>
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
