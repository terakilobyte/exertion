import React from 'react'
import '../styles/Counter.scss'

export const Counter = (props) => (
  <div>
    <h2>Sum: {props.sum}</h2>
    <button className='counter' onClick={props.add}>Add 1</button>
    <button className='counter' onClick={props.sub}>Subtract 1</button>
    <button className='counter' onClick={props.asyncAdd}>Async add 1</button>
    <button className='counter' onClick={props.asyncSub}>Async sub 1</button>
  </div>
)

Counter.propTypes = {
  sum: React.PropTypes.number.isRequired,
  asyncAdd: React.PropTypes.func.isRequired,
  asyncSub: React.PropTypes.func.isRequired,
  add: React.PropTypes.func.isRequired,
  sub: React.PropTypes.func.isRequired
}

export default Counter
