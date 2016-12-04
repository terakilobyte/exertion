import React from 'react'
import '../styles/Counter.scss'

export const Counter = (props) => (
  <div>
    <h2>This is the local(only you)</h2>
    <h2>Redux: {props.reduxSum}</h2>
    <button className='counter' onClick={props.add}>Add 1</button>
    <button className='counter' onClick={props.sub}>Subtract 1</button>
    <h2>This is the server(shared by all visitors)</h2>
    <h2>Server: {props.serverSum}</h2>
    <button className='counter' onClick={props.channelAdd}>Add 1</button>
    <button className='counter' onClick={props.channelSub}>Subtract 1</button>
  </div>
)

Counter.propTypes = {
  reduxSum: React.PropTypes.number.isRequired,
  serverSum: React.PropTypes.number.isRequired,
  add: React.PropTypes.func.isRequired,
  sub: React.PropTypes.func.isRequired,
  channelAdd: React.PropTypes.func.isRequired,
  channelSub: React.PropTypes.func.isRequired,
  asyncAdd: React.PropTypes.func.isRequired,
  asyncSub: React.PropTypes.func.isRequired
}

export default Counter
