import React from 'react'
import Percolation from './Percolation'

class Entry extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    let size = Number.parseInt(this.refs.input.value, 10)
    this.props.initialize({size})
  }

  render () {
    let entry = this.props.size === 0
    ? (
      <div>
        <label htmlFor='select-gridSize'>
          Select your grid size &nbsp;&nbsp;
        </label>
        <input id='select-gridSize' type='text' ref='input' />
        &nbsp;&nbsp;
        <button onClick={this.handleClick}> Sumbit </button>
      </div>
      )
    : (
      <div>
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
