import React from 'react'

class Square extends React.Component {

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    this.props.click(this.props.row, this.props.col)
  }

  render () {
    let clicked = this.props.clicked ? 'clicked' : ''
    let full = this.props.clicked && this.props.full ? 'full' : ''
    return (
      <div className={`grid-square ${clicked} ${full}`}
        onClick={this.handleClick}
      />
    )
  }
}

Square.propTypes = {
  row: React.PropTypes.number.isRequired,
  col: React.PropTypes.number.isRequired,
  click: React.PropTypes.func.isRequired,
  clicked: React.PropTypes.bool.isRequired,
  full: React.PropTypes.bool.isRequired
}

export default Square
