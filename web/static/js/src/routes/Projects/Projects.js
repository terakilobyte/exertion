import React from 'react'
import { Link } from 'react-router'
import PresentationCard from '../../components/PresentationCard'
import './Projects.scss'

const Projects = (props) => (
  <div id='centerHomeID' className='centerHome'>
    <Link className='presentation-link' to='tictactoe'>
      <PresentationCard content='Tic-Tac-Toe' />
    </Link>
    <Link className='presentation-link' to='counter'>
      <PresentationCard content='Counter' />
    </Link>
    <a href='https://www.freecodecamp.com'>
      <PresentationCard content='freeCodeCamp' faClass='fa fa-free-code-camp' />
    </a>
    <Link className='presentation-link' to='percolation'>
      <PresentationCard content='Percolation' />
    </Link>
  </div>
)

Projects.displayName = 'Projects'

export default Projects
