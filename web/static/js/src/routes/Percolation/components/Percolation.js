import React from 'react'

import '../styles/Percolation.scss'
import Square from './Square'

class Percolation extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    let grid = Array.from(new Array(10)).map((elem, row) => {
      return (
        <div className='grid-row' key={row}>
          {
          Array.from(new Array(10)).map((innerElem, col) => {
            return (
              <Square key={`row:${row + 1} col:${col + 1}`}
                row={row + 1}
                col={col + 1}
              />
            )
          })
        }
        </div>
      )
    })
    return (
      <div>
        {grid}
      </div>
    )
  }
}

export default Percolation
