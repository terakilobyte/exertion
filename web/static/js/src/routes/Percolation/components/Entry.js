import React from 'react'
import Percolation from './Percolation'
import '../styles/Percolation.scss'

class Entry extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    let size = Number.parseInt(this.refs.input.value, 10)
    if (isNaN(size)) {
      return
    }
    if (size > 45) {
      size = 45
    }
    if (size < 3) {
      size = 3
    }
    this.props.initialize({size})
  }

  render () {
    let entry = this.props.size === 0
    ? (
      <div>
        <h4 className='wrap'>This is a visualization for an algorithm that determines
          whether something
          <a className='info-link' href='https://en.wikipedia.org/wiki/Percolation'> percolates</a>.
          Due to visibility issues, the maximum grid size is kept to 45.
          If you're on mobile, I suggest going no higher than 25.
        </h4>
        <br />
        <label htmlFor='select-gridSize'>
          Select your grid size&nbsp;&nbsp;
        </label>
        <input id='select-gridSize' type='number' min='3' max='25' ref='input' />
        &nbsp;&nbsp;
        <button onClick={this.handleClick}> Submit </button>
      </div>
      )
    : (
      <div className='percolation'>
        <Percolation />
      </div>
      )
    return (
      <div>
        {entry}
      </div>
    )
  }
}

Entry.propTypes = {
  initialize: React.PropTypes.func.isRequired,
  size: React.PropTypes.number.isRequired
}

export default Entry
