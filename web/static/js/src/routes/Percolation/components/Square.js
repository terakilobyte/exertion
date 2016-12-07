import React from 'react'

class Square extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    if (this.state.clicked) {
      event.target.classList.remove('clicked', 'full')
    } else {
      event.target.classList.add('clicked')
    }
    this.setState({clicked: !this.state.clicked})
    console.log(`grid ${this.props.row}, ${this.props.col}`)
  }

  render () {
    return (
      <div className='grid-square'
        onClick={this.handleClick}
      />
    )
  }
}

Square.propTypes = {
  row: React.PropTypes.number.isRequired,
  col: React.PropTypes.number.isRequired
}

export default Square
