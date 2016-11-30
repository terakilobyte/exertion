export const ADD = 'ADD'
export const SUB = 'SUB'
export const ASYNCADD = 'ASYNCADD'
export const ASYNCSUB = 'ASYNCSUB'
export const SERVERADD = 'SERVERADD'
export const SERVERSUB = 'SERVERSUB'
export const CHANNELADD = 'CHANNELADD'
export const CHANNELSUB = 'CHANNELSUB'
export const SOCKET_CONNECTED = 'SOCKET_CONNECTED'
export const CHANNEL_JOINED = 'CHANNEL_JOINED'
export const INIT = 'INIT'

export const add = () => {
  return ({ type: ADD })
}
export const sub = () => ({ type: SUB })
export const asyncAdd = () => ({type: ASYNCADD})
export const asyncSub = () => ({type: ASYNCSUB})

export const actions = {
  add,
  sub,
  asyncAdd,
  asyncSub
}

const initialState = {
  reduxSum: 0,
  serverSum: 0,
  socket: null,
  channels: {}
}

export const sum = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        reduxSum: state.reduxSum + 1
      }

    case SUB:
      return {
        ...state,
        reduxSum: state.reduxSum - 1
      }

    case INIT:
      return {
        ...state,
        serverSum: action.serverSum
      }

    case SERVERADD:
      return {
        ...state,
        serverSum: state.serverSum + 1
      }

    case SERVERSUB:
      return {
        ...state,
        serverSum: state.serverSum - 1
      }

    case SOCKET_CONNECTED:
      return {
        ...state,
        socket: action.socket
      }

    case CHANNEL_JOINED:
      let newState = {
        ...state,
        channels: {
          ...state.channels,
          [action.name]: action.channel
        }
      }
      return newState

    case CHANNELADD:
      console.log('store got hit')
      return state

    default:
      return state
  }
}

export default sum
