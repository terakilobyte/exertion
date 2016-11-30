import { Socket } from 'phoenix'
import { INIT,
         SERVERADD,
         SERVERSUB,
         SOCKET_CONNECTED,
         CHANNEL_JOINED,
         CHANNELADD,
         CHANNELSUB
} from './index'

const socketHandlers = (name, channel, dispatch) => {
  channel.on('init', msg => {
    console.log('init with value', msg.total)
    dispatch({
      type: INIT,
      serverSum: msg.total
    })
  })
  channel.on('add', () => {
    console.log('got an add event')
    dispatch({
      type: SERVERADD
    })
  })
  channel.on('sub', () => {
    console.log('got an sub event')
    dispatch({
      type: SERVERSUB
    })
  })
}

const socketConnect = () => {
  return (dispatch) => {
    const socket = new Socket('/socket', {})
    socket.connect()
    dispatch({
      type: SOCKET_CONNECTED,
      socket
    })
  }
}
const channelJoin = (name, alias = null) => {
  alias = alias === null ? name : alias
  return (dispatch, getState) => {
    console.log(getState())
    const ws = getState().counter.socket
    const channel = ws.channel(name)
    channel.join().receive('ok', () => {
      socketHandlers(alias, channel, dispatch)
      dispatch({
        type: CHANNEL_JOINED,
        name: alias,
        channel
      })
    })
  }
}

export default {
  socketConnect,
  channelJoin
}

export const channelAdd = () => {
  return (dispatch, getState) => {
    const channel = getState().counter.channels.counter
    channel.push('add')
    dispatch({
      type: CHANNELADD
    })
  }
}
export const channelSub = () => {
  return (dispatch, getState) => {
    const channel = getState().counter.channels.counter
    channel.push('sub')
    dispatch({
      type: CHANNELSUB
    })
  }
}

