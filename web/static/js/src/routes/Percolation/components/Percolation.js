import React from 'react'
import { connect } from 'react-redux'

import '../styles/Percolation.scss'
import Square from './Square'
import { actions } from '../modules/reducer'

class Percolation extends React.Component {

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (row, col) {
    let payload = {
      percolation: this.props.percolation,
      grid: this.props.grid,
      tile: {
        row,
        col
      }
    }
    this.props.clickedTile(payload)
  }

  render () {
    console.log(this.props.percolation)
    let grid = this.props.grid.map((row, rowIdx) => {
      return (
        <div className='grid-row' key={rowIdx}>
          {
            row.map((col, colIdx) => {
              let key = (rowIdx * this.props.size) + colIdx + 1
              return (
                <Square click={this.handleClick}
                  row={rowIdx + 1}
                  col={colIdx + 1}
                  key={key}
                  clicked={this.props.open[key] || false}
                  full={this.props.percolation.full.parent[key] === 0 || false}
                />
              )
            })
          }
        </div>
      )
    })
    console.log(this.props.percolation.percolates())
    let percolates = this.props.percolation.percolates()
                   ? (
                     <h3>Percolates!</h3>
                   )
                   : (
                     <div />
                   )
    return (
      <div>
        {grid}
        {percolates}
      </div>
    )
  }
}

Percolation.propTypes = {
  clickedTile: React.PropTypes.func.isRequired,
  grid: React.PropTypes.array.isRequired,
  open: React.PropTypes.array.isRequired,
  size: React.PropTypes.number.isRequired,
  percolation: React.PropTypes.object.isRequired
}

const mapStateToProps = ({percolation}) => {
  return {
    percolation: percolation.percolation,
    open: percolation.open,
    full: percolation.full,
    size: percolation.size,
    grid: percolation.grid
  }
}

export default connect(mapStateToProps, actions)(Percolation)
