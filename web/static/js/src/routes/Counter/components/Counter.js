import React from 'react'

export const Counter = (props) => (
  <div>
    <h2>Sum: {props.sum}</h2>
    <button onClick={props.add}>Add 1</button>
    <button onClick={props.sub}>Subtract 1</button>
    <button onClick={props.asyncAdd}>Async add 1</button>
    <button onClick={props.asyncSub}>Async sub 1</button>
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
