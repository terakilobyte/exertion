import React from 'react'
import '../styles/Counter.scss'

export const Counter = (props) => (
  <div>
    <h4>This is the local(only you)</h4>
    <p>Redux: {props.reduxSum}</p>
    <button className='counter' onClick={props.add}>Add 1</button>
    <button className='counter' onClick={props.sub}>Subtract 1</button>
    <h4>This is the server(shared by all visitors)</h4>
    <p>Server: {props.serverSum}</p>
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
